// ====== need to undestand diffrence between node and express things =====

// const http = require("http");
// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { Content: "text/plain" });
//   res.end("Hello World!");
// });

// const port = process.env.PORT || 3000;
// server.listen(port, function () {
//   console.log("Server is listning on port:", port);
// });

// database integration
const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017/my-first-db";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
});
// Connecting to the database
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    // Specify the database you want to use
    const database = client.db("crud-node-mongodb");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

connectToDatabase();

// Create express server
const express = require("express");
// const db = require("./db");
const app = express();

const port = 3000;
app.listen(port, () => {
  console.log("Server is listening on port : 3000");
});

app.get("/", function (req, res) {
  res.send("Ok");
});

// db();
// app.get("/get", async function (req, res) {
//   try {
//     const db = client.db("crud-node-mongodb");
//     const collection = db.collection("empCollection"); // Replace with your actual collection name

//     const data = await collection.find({}).toArray();
//     res.json(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).send("Internal Server Error");
//   }

//   res.send("get method called");
// });


app.post('/post', function (req,res){
  const database = client.db('crud-node-collection')
  const collection = database.collection("empCollection")
  res.send('post method called')
})
// app.post("/post", async function (req, res) {
//   const database = client.db("crud-node-mongodb");
//   const collection = database.collection("collection");

//   // Accessing data from query parameters
//   const data = {
//     name: req.query.name,
//     age: parseInt(req.query.age), 
//   };

//   try {
//     const result = await collection.insertOne(data);
//     console.log("Inserted document with Id:", result.insertedId);
//     res.send("post method called");
//   } catch (err) {
//     console.log("Error inserting data", err);
//     res.status(500).send("Internal Server Error");
//   }
// });

// app.delete("/delete", function (req, res) {});
