const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/hospital");

const db = mongoose.connection;

db.on(
  "error",
  console.error.bind(console, "error connecting to the database!")
);

db.once("open", function () {
  console.log("Connetion Established");
});
