const express = require("express");
const router = express.Router();
const doctorsApi = require("../../../controller/api/v1/doctors_api");

router.get("/register", doctorsApi.register);
router.get("/login", doctorsApi.login);

module.exports = router;
