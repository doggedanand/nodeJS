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
    const database = client.db("my-first-db");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

connectToDatabase();
// Inserting data into the database
async function insertData() {
  const database = client.db("my-first-db");
  const collection = database.collection("collection");
  const data = { name: "krishna", age: 24 };
  try {
    const result = await collection.insertOne(data);
    console.log("Inserted document with Id:", result.insertedId);
  } catch (err) {
    console.log("Error inserting data", err);
  }
}

insertData();
// Updating data in the database

async function updateData() {
  const database = client.db("my-first-db");
  const collection = database.collection("collection");
  const filter = { name: "anand" };
  const update = { $set: { age: 23 } };

  try {
    const result = await collection.updateOne(filter, update);
    console.log("Document updated:", result.modifiedCount);
  } catch (err) {
    console.log("Error updating data", err);
  }
}

// updateData();
// Deleting data from the database
async function deleteData() {
  const database = client.db("my-first-db");
  const collection = database.collection("collection");
  const filter = { name: "anand" };

  try {
    const result = await collection.deleteOne(filter);
    console.log("Document deleted:", result.deletedCount);
  } catch (err) {
    console.log("Error deleting data", err);
  }
}

// deleteData();

async function getData() {
  const database = client.db("my-first-db");
  const collection = database.collection("collection");

  try {
    const getData = collection.find();

    await getData.forEach((data) => {
      console.log(data);
    });
  } catch (err) {
    console.log("Error fetching data", err);
  }
}

// getData();
