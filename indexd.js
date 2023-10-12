// Asynchronus Operation using promise
function readFileAsync() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const content = "This is the file content.";
      return content;
    }, 500);
  });
}

// Using a promise to handle the request
readFileAsync()
  .then(function (data) {
    console.log("File content:", data);
  })
  .catch(function (error) {
    console.log("Error reading file:", error);
  });
