// using async/await
const filePath = "./test.js";
async function readPrintFile(filePath) {
  try {
    const data = await readFileAsync(filePath);
    console.log(data);
  } catch (error) {
    console.log("error", error.message);
  }
}

readPrintFile();
