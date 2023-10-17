// Basic error handling in NodeJS
function devide(a, b) {
  if (b == 0) {
    throw new error("Devision by 0 error");
  } else {
    return a / b;
  }
}

try {
  const result = devide(10, 0);
  console.log("Result ", result);
} catch (error) {
  console.error("An error", error.message);
}
// const result = devide(10, 0);
// console.log("Result ", result);
