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

async function sendToQueue(queue, message) {
  try {
    const channel = await connect();

    await createQueue(channel, queue);

    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
  } catch (error) {
    console.log(error);
  }
}

async function consume(queue, callback) {
  try {
    const channel = await connect();

    await createQueue(channel, queue);
    await channel.consume(queue, callback, { noAck: true });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  sendToQueue,
  consume,
};
