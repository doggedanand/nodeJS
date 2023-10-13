// Asynchronous operation using async/await
async function readFileAsync() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const content = "This is the file content";
      resolve(content);
    }, 2000);
  });
}

// readFileAsync()

// console.log(readFileAsync());

// Using async/await to handle the request
async function main() {
  try {
    const data = await readFileAsync();
    console.log("File content:", data);
  } catch (error) {
    console.error(error);
  }
}
main();
