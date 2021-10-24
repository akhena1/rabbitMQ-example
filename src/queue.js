const amqp = require("amqplib");

async function connect() {
  const connection = await amqp.connect("amqp://localhost");

  return connection.createChannel();
}

async function createQueue(channel, queue) {
  try {
    await channel.assertQueue(queue, { durable: true });
  } catch (error) {
    return error;
  }
}
