require("dotenv").config();
const express = require("express");
const app = express();
// const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello person!");
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server up and listening`);
});
