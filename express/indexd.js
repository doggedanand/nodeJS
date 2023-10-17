// Asynchronous Error Handling
const fs = require("fs/promises");
fs.readFile("./indexd.txt")
  .then((data) => {
    console.log("File content:", data.toString());
  })
  .catch((error) => {
    console.error("An error occured:", error.message);
  });
