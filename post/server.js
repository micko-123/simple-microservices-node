const express = require("express");
const cors = require("cors");
const { randomBytes } = require("crypto");

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

app.post("/posts", (req, res) => {
  const { title } = req.body;
  const id = randomBytes(4).toString("hex");
  posts[id] = { id, title };
  console.log(posts[id]);

  res.status(201).json(posts[id]);
});

app.listen(PORT, () => {
  console.log("Server listening");
});
