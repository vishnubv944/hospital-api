const express = require("express");
const router = express.Router();
const reportsApi = require("../../../controller/api/v1/reports_api");

router.get("/:status", reportsApi.status);

module.exports = router;
