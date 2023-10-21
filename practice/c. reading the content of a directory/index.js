// reading the content of a directory
const fs = require("fs");
const folderPath = "./practice";
fs.readdir(folderPath, (err, file) => {
  if (err) {
    console.log("Error reading:", err);
  } else {
    console.log("Content of the directory:", file);
  }
});
