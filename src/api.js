const express = require("express");
const app = express();
const queue = require("./queue");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = express.Router();

router.post("/task", (req, res) => {
  queue.sendToQueue("Fila1", req.body);
  res.json({ message: "Your request will be processed!" });
});

app.use("/", router);

app.listen(3000, () => console.log("Server running on localhost:3000"));
