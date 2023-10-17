// Write a file synchronously
const fs = require("fs");
const filePath = "./indexh.txt";
// Data write to the file
const dataToWrite = "Hello NodeJS! from JS file.";
// Sync file write
try {
  fs.writeFileSync(filePath, dataToWrite, "utf8");

  console.log("Data written to the file successully");
} catch (error) {
  console.error("Error written to the file", error);
}

console.log("Happend before file write.");
// const currentDirectory = process.cwd;
// console.log("Current working directory :", currentDirectory);
