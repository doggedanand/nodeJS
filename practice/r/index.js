// event emitter and events
const eventEmitter = require("events");
// Create an emitter instance
const myEmitter = new eventEmitter();
// Register an event listner
myEmitter.on("myEvent", () => {
  console.log("Event was emitted");
});

// Emmit the event
myEmitter.emit("myEvent");
// Handle the error
myEmitter.on("Error", (error) => {
  console.log("Error event", error);
});

myEmitter.emit("myEvent");
