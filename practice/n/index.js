// building restful api using express
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("server is listning on port ", port);
});

app.get("/api", (req, res) => {
  
  res.json({ message: "Get request resolved" });
});

// Handle request parameter
app.get("/api/resource/:id", (req, res) => {
  const resourceId = req.params.id;
  // use resourceId to fetch the data in ID
  res.json({ id: resourceId, message: "Data from resourceID:", resourceId });
});
