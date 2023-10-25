// chainig promises in nodejs

const fs = require("fs");
const filePath = "./test.js";
console.log("filePath", filePath);
function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function readMultipleFile(files) {
  try {
    for (const file of files) {
      const data = await readFileAsynce(file);
      console.log(data);
    }
  } catch (err) {
    console.log("Error:", err);
  }
}

const file1 = "./file1.txt";
const file2 = "./file1.txt";
const file3 = "./file1.txt";
const fileToRecord = [file1, file2, file3];
readMultipleFile(fileToRecord);
