// Reading a file
const fs = require("fs");
const filePath = "./indexe.txt";
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File content:", data);
  }
});
