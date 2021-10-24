const amqp = require("amqplib");

async function connect() {
  const connection = await amqp.connect("amqp://localhost");

  return connection.createChannel();
}
