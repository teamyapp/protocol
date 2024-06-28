#!/usr/bin/env node

const fs = require("fs");
const path = require('path');
const { join, resolve } = require("path");
const { execSync } = require("child_process");

const paths = ["proto"];
const pbDir = resolve(__dirname, "..", "pb");
const pbGoDir = resolve(pbDir, "pbgo");
const pbWebDir = resolve(pbDir, "pbweb", "src");

const dirsToCleanUp = [pbWebDir, resolve(pbGoDir, "cloud"), resolve(pbGoDir, "teamy")];
dirsToCleanUp.forEach((dir) => {
  cleanupDir(dir);
});

for (let path of paths) {
  const protoDir = resolve(__dirname, "..", path);

  findFilesRec(path, (file) => {
    if (!file.endsWith(".proto")) {
      return;
    }

    const resolvedFile = resolve(file);
    console.log(`Found ${resolvedFile}`);

    execSync(
      `protoc --proto_path=${protoDir} --go_out=${pbGoDir} --go_opt=paths=source_relative --go-grpc_out=${pbGoDir} --go-grpc_opt=paths=source_relative ${resolvedFile}`,
      { stdio: "inherit" }
    );

    execSync(
      `protoc --plugin=node_modules/.bin/protoc-gen-ts --proto_path=${protoDir} --ts_out=${pbWebDir} --ts_opt long_type_number ${resolvedFile}`,
      { stdio: "inherit" }
    );
  });

  createIndex(pbWebDir);
}

function createIndex(inputPath) {
  let indexContent = "";
  const stack = [inputPath];

  while (stack.length > 0) {
    const currentDir = stack.pop();
    const files = fs.readdirSync(currentDir);

    files.forEach((file) => {
      const fullPath = path.join(currentDir, file);
      const stats = fs.statSync(fullPath);
      if (stats.isDirectory()) {
        stack.push(fullPath);
        return;
      }

      if (file.endsWith(".ts") && file !== "index.ts") {
        const relativeFilePath = path.relative(inputPath, fullPath);
        const moduleName = relativeFilePath
            .replace(".ts", "")
            .replace(/\\/g, "/");
        indexContent += `export * from './${moduleName}';\n`;
      }
    });
  }

  fs.writeFileSync(path.join(inputPath, 'index.ts'), indexContent);
  console.log(`index.ts has been created/updated in ${inputPath}`);
}

function findFilesRec(dir, outputFile) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findFilesRec(filePath, outputFile);
    } else {
      outputFile(filePath);
    }
  });
}

function cleanupDir(dir) {
  if (!fs.existsSync(dir)) {
      console.log(`Directory does not exist: ${dir}`);
      return;
  }
  
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.lstatSync(filePath);

    if (stats.isDirectory()) {
      cleanupDir(filePath);
      fs.rmdirSync(filePath);
      console.log(`Deleted directory: ${filePath}`);
      return
    }
    
    fs.unlinkSync(filePath);
    console.log(`Deleted file: ${filePath}`);
  });
}
