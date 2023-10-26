// asynchrounous code using axios library
const axios = require("axios");
async function fetchData() {
  try {
    const responce = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/11"
    );
    console.log("Data:", responce.data);
  } catch (err) {
    console.log("Error:", err);
  }
}

fetchData();
