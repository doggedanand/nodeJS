// ##############################################
const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017/pugDB";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.err("Error connecting to MongoDB:", err);
  }
}

connectToDatabase();
module.exports = client;
