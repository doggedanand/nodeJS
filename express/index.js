// Create express server
const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("Welcome to my website.");
});

// Other example
app.get("/about", (req, res) => {
  res.send("This is the about page.");
});
// Route defined
const PORT = 3000; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
