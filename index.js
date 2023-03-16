const express = require("express");
const app = express();
const port = 3001;
const db = require("./config/mongoose");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`Live and listening on port ${port}`);
});
