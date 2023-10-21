// checking if a path is directory of file
const fs = require("fs");
const folderPath = "./practice";
fs.readFile(folderPath, (err, stats) => {
  if (err) {
    console.log("Error loading path:", err);
  } else {
    if (stats.isDirectory()) {
      console.log("The path is a directory");
    } else if (stats.isFile()) {
      console.log("The path is a file.");
    }
  }
});

