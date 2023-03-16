const express = require("express");
const router = express.Router();
const patientsApi = require("../../../controller/api/v1/patients_api");
const app = express();

router.post("/register", patientsApi.register);
router.get("/:id/create_report", patientsApi.createReport);
router.get("/:id/all_reports", patientsApi.allReports);

module.exports = router;
