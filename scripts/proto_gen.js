#!/usr/bin/env node

const fs = require("fs");
const { join, resolve } = require("path");
const { execSync } = require("child_process");

const paths = ["proto"];
for (let path of paths) {
  findFilesRec(path, (file) => {
    if (!file.endsWith(".proto")) {
      return;
    }

    const protoDir = resolve(__dirname, "..", path);
    const resolvedFile = resolve(file);
    console.log(`Found ${resolvedFile}`);

    const protoGoDir = resolve(protoDir, "proto-go");
    execSync(
      `protoc --proto_path=${protoDir} --go_out=${protoGoDir} --go_opt=paths=source_relative --go-grpc_out=${protoGoDir} --go-grpc_opt=paths=source_relative ${resolvedFile}`,
      { stdio: "inherit" }
    );

    const protoWebDir = resolve(protoDir, "proto-web");
    execSync(
        `protoc --proto_path=${protoDir}  --js_out=import_style=commonjs:${protoWebDir} --grpc-web_out=import_style=typescript,mode=grpcwebtext:${protoWebDir} ${resolvedFile}`,
        { stdio: 'inherit' }
    )
  });
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
