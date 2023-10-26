// perform database operation
// insert data

async function insertData() {
  const database = client.db("my-first-db");
  const collection = database.collection("collection");
  const data = { name: "anand", age: 22 };
  try {
    const result = await collection.insertOne(data);
    console.log("Inserted document with Id:", result.insetedID);
  } catch (err) {
    console.log("Error inserting data", err);
  }
}

insertData();
