// Middleware and Routing
const express = require("express");
const app = express();
// Middle ware function
app.use((req, res, next) => {
  console.log("Middle of executed");
});

// Middleware function 2
app.use((req, res, next) => {
  console.log("Middleware 2 exectued");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on 3000");
});
