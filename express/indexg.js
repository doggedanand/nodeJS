// Write to a file
const fs = require("fs");
const filePath = "./indexg.txt";
// Data to write the file
const dataToWrite = "Hello World! from JS file.";
fs.writeFile(filePath, dataToWrite, "utf8", (err) => {
  if (err) {
    console.error("Error writing to the file:", err);
    return;
  }
  console.log("Data written to the file succesfully");
});
