// promise in nodejs
const fs = require("fs");
const filePath = "./test.js"
console.log('filePath',filePath)
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
readFileAsync(filePath)