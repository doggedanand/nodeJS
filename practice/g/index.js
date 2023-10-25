// reading JSON file
const fs = require("fs");
// specity the file path
const filePath = './practice/g/test/'
// Read the JSON data

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading JSON file:", err);
    return;
  }
  const JSONData = JSON.parse(data);
  // Now data is contain JavaScript object
  console.log(JSONData);
});
