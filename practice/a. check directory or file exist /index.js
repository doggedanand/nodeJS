// check directory or file exist
const fs = require('fs')
const path = require("path");
const folderPath = "./a.";
const filePath = "./test.txt";
if (fs.existsSync(filePath)) {
  console.log("The file is extsts.");
} else {
  console.log("The file is not exists.");
}
