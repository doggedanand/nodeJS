// Create MongoDB server
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/crud-node-mongodb";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
});

async function connectDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to", err);
  }
}

// Export the connectDatabase function
module.exports = connectDatabase;
