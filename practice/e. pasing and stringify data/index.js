// working with JSON

// const JSONString = '{
//   "name": "john doe",
//   "age": 30
// }
const JSONString = '{ "name": "john doe","age": 30}';

const data = JSON.parse(JSONString);
console.log("JSON to Object converted data :", data.name);
