const express = require("express");
const router = express.Router();

app.use("/doctors", require("./routes/v1/doctors"));
app.use("/paients", require("./routes/patients"));
app.use("/reports", require("./routes/reports"));

module.exports = router;
