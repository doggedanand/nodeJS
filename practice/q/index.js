// handle the error and cleanup
async function closeConnection() {
  try {
    await client.close();
    console.log("Disconnected from Mongodb");
  } catch (err) {
    console.log("Error closing the connection");
  }
}

process.on("SIGINT", () => {
  closeConnection().then(() => {
    process.exit(0);
  });
});
