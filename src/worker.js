console.log("Worker started");

const queue = require("./queue");
queue.consume("Fila1", (message) => {
  // process the message
  console.log("processing ", message.content.toString());
});
