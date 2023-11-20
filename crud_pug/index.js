// create express server
const express = require("express");
const app = express();

// define the port
const port = 3000;
// listening the server
app.listen(port, () => {
  console.log(`Server is listening on port :http://localhost:${port}`);
});

// to tell the express that public dir has all assets file
app.use(express.static(__dirname + "/public"));
// used bodyparser ====================
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// use the json data in request body
app.use(express.json());

// export the database
const client = require("./db");
const { ObjectId } = require("mongodb");

// set the view engine to pug
app.set("view engine", "pug");

// open home page
app.get("/", async function (req, res) {
  try {
    console.log("get called!");

    const db = client.db("pugDB");
    const collection = db.collection("pugCollection");

    const data = await collection.find({}).toArray();

    res.render("index", { users: data });
  } catch (err) {
    console.log("Error getting userData", err);
    res.status(500).send("Internal Server Error");
  }
});

// show the all users

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

// add the users

app.post("/addUser", async function (req, res) {
  console.log("post method called");
  const database = client.db("pugDB");
  const collection = database.collection("pugCollection");
  try {
    // Accessing data from body parameters
    const { name, age, gender, designation } = req.body;

    // Create an object with the user data
    const userData = {
      name: name,
      age: age,
      gender: gender,
      designation: designation,
    };

    const result = await collection.insertOne(userData);
    console.log("===result===", result);
  } catch (err) {
    console.error("===err===", err);
  }

  res.redirect("/");
});

// delete user record

app.delete("/delete/:id", async function (req, res) {
  console.log("deleted route called");
  const idToDelete = req.params.id;
  const database = client.db("pugDB");
  const collection = database.collection("pugCollection");

  try {
    const filter = { _id: new ObjectId(idToDelete) };
    console.log(typeof filter, "filter");
    const result = await collection.deleteOne(filter);
    console.log("deleted the record", result);
    return res.json({ status: 200 });
  } catch (err) {
    console.log("Error deleting user record", err);
  }
});

// open the edit form
app.get("/editUser/:id", async function (req, res) {
  const idToEdit = req.params.id;

  console.log("idToEdit", idToEdit);
  const database = client.db("pugDB");
  const collection = database.collection("pugCollection");
  try {
    console.log("===collection");
    const filter = { _id: new ObjectId(idToEdit) };
    const data = await collection.findOne(filter);

    res.render("edit_form", { users: data });
  } catch (err) {
    console.log("Error in opening edit form", err);
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
  const filter = { _id: new ObjectId(idToUpdate) };

  try {
    const data = {
      name: req.body.name,
      age: parseInt(req.body.age),
      gender: req.body.gender,
      designation: req.body.designation,
    };
    console.log("data of update form", data);

    const update = {
      $set: {
        name: data.name,
        age: data.age,
        gender: data.gender,
        designation: data.designation,
      },
    };
    const result = await collection.updateOne(filter, update);
    console.log("result======", result);
    if (result.modifiedCount === 1 && result.matchedCount === 1) {
      res.json({ status: 200 });
    } else if (result.matchedCount === 1 && result.modifiedCount === 0) {
      res.status(200).send("No changes to update!");
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    console.error("Error updating data:", error);
    res.status(500).send("Internal Server Error");
  }
});
