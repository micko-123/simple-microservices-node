const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5001;

app.use(express.json());
app.use(cors());

const comments = {};

app.get("/comments", (req, res) => {
  res.status(200).json(comments);
});

app.post("/comments", (req, res) => {
  const { comment } = req.body;
  const id = randomByte(2).toString("hex");
  comments[id] = comment;
  console.log(comment);
  res.status(201).json(comments);
});

app.listen(PORT, () => {
  console.log("Server listening");
});
