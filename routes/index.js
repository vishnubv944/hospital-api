const express = require("express");
const router = express.Router();
const app = express();

router.use("/api", require("./api"));

module.exports = router;
