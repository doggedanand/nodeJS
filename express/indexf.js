// Reading file synchronously
const fs = require("fs");
try {
  const data = fs.readFileSync("./indexf.txt", "utf8");
  console.log("File content data:", data);
} catch (err) {
  console.log("Error reading file :", err);
}
