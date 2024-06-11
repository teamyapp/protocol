#!/usr/bin/env node

const fs = require("fs");
const path = require('path');
const { join, resolve } = require("path");
const { execSync } = require("child_process");

const paths = ["proto"];
for (let path of paths) {
  const protoDir = resolve(__dirname, "..", path);
  const protoGoDir = resolve(protoDir, "pbgo");
  const protoWebDir = resolve(protoDir, "pbweb", "src");
  findFilesRec(path, (file) => {
    if (!file.endsWith(".proto")) {
      return;
    }

    const resolvedFile = resolve(file);
    console.log(`Found ${resolvedFile}`);

    execSync(
      `protoc --proto_path=${protoDir} --go_out=${protoGoDir} --go_opt=paths=source_relative --go-grpc_out=${protoGoDir} --go-grpc_opt=paths=source_relative ${resolvedFile}`,
      { stdio: "inherit" }
    );

    execSync(
      `protoc --plugin=node_modules/.bin/protoc-gen-ts --proto_path=${protoDir} --ts_out=${protoWebDir} --ts_opt long_type_number ${resolvedFile}`,
      { stdio: "inherit" }
    );
  });

  createIndex(protoWebDir);
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
