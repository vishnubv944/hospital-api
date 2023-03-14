const express = require("express");
const app = express();
const port = 3000;
const db = require("./config/mongoose");

// app.get("/", require("./routes"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
