const express = require("express");
const app = express();

app.use(express.json());
let messages = [];

app.use(express.static("frontend"));

app.get("/messages", (req, res) => {
  res.send(messages);
});

app.post("/create-message", (req, res) => {
  messages.push(req.body);
  res.send("Cat created");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
