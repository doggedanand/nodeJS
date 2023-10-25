// Understanding error first callback
const fs = require("fs");

function readFileAndNotify(fileName, callback) {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      // If there an error, call the callback with error
      callback(err, null);
    } else {
      // If everything is ok call the callback with data
      callback(null, data);
    }
  });
}

// using function
readFileAndNotify("example.txt", (error, content) => {
  if (error) {
    console.log("error", error);
  } else {
    console.log("File content", content);
  }
});