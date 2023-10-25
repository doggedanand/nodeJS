// Writing JSON file
const fs = require("fs");
// Console a JavaScript object
const data = {
  name: "John",
  age: 33,
  city: "New York",
};

// Specify the file path
const filePath = "./practice/g/test/";
// convert the data object to a JSONString
const JSONString = JSON.stringify(data,null, 2);
// Write to the file
fs.writeFile(filePath, JSONString, "utf8", (err) => {
  if (err) {
    console.error("Error writing to JSON file:", err);
    return;
  }
  console.log("JSON data has been written to the file.");
});
