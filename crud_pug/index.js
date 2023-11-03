// create express server
const express = require("express");
const app = express();

// define the port
const port = 3000;
// listening the server
app.listen(port, () => {
  console.log("Server is listening on port :", port);
});

// export the database
const client = require("./db");

// app.use(express.static("public"));
// set the view engine to pug
app.set("view engine", "pug");
// get method
app.get("/", function (req, res) {
  res.render("index");
});

// Get method

app.get("/users", async function (req, res) {
  try {
    const db = client.db("pugDB");
    const collection = db.collection("pugCollection");

    const data = await collection.find({}).toArray();

    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Post method

app.post("/addUser", async function (req, res) {
  const database = client.db("pugDB");
  const collection = database.collection("pugCollection");

  // Accessing data from query parameters
  const data = {
    name: req.query.name,
    age: parseInt(req.query.age),
  };

  try {
    const result = await collection.insertOne(data);
    console.log("Inserted document with Id:", result.insertedId);
    res.send("post method called!!");
  } catch (err) {
    console.log("Error inserting data", err);
    res.status(500).send("Internal Server Error");
  }
});

// Delete method

app.delete("/remove/:id", async function (req, res) {
  console.log("deleted route");
  const database = client.db("pugDB");
  const collection = database.collection("pugCollection");

  const idToDelete = req.params.id;
  console.log("user passed id ", idToDelete);
  try {
    const filter = { _id: new ObjectId(idToDelete) };
    console.log("filter in delete route", filter);
    const result = await collection.deleteOne(filter);
    if (result.deletedCount === 1) {
      console.log("Data deleted successfully!");
      res.send(`Data with ID ${idToDelete} deleted successfully!`);
    } else {
      console.log(`No data found with ID ${idToDelete}`);
      res.status(404).send(`No data found with ID ${idToDelete}`);
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Get user by ID
app.get("/users/:id", async function (req, res) {
  const idToFind = req.params.id;
  console.log("getById request id is ", idToFind);

  try {
    const db = client.db("pugDB");
    const collection = db.collection("pugCollection");

    const user = await collection.findOne({ _id: new ObjectId(idToFind) });

    if (user) {
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Update method

app.put("/update/:id", async function (req, res) {
  console.log("put requested by user");
  const database = client.db("pugDB");
  const collection = database.collection("pugCollection");

  const idToUpdate = req.params.id;
  console.log("update request id is ", idToUpdate);
  // Filter the data
  const filter = { _id: new ObjectId(idToUpdate) };
  console.log("filter is ", filter);
  try {
    const data = {
      name: req.query.name,
      age: parseInt(req.query.age),
    };
    // Update the document
    console.log("url data ", data);
    const update = { $set: { name: data.name, age: data.age } };
    const result = await collection.updateOne(filter, update);
    if (result.modifiedCount === 1) {
      res.status(200).send("User updated successfully");
    } else if (result.matchedCount === 1) {
      res.status(200).send("No changes to update!");
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    console.error("Error updating data:", error);
    res.status(500).send("Internal Server Error");
  }
});
