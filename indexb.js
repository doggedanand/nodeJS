// Non blocking I/O
const fs = require("fs");
// File system module
fs.readFile("indexbExample.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
  }
  console.log("File contain data:", data);
});
console.log("Reading file ...");
