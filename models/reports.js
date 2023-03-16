const mongoose = require("mongoose");

const reportsSchema = new mongoose.Schema({
  Status: {
    type: String,
    required: true,
  },
  LastUpdated: {
    type: String,
    required: true,
  },
  BPLevel: {
    type: String,
    required: true,
  },
  SugarLevel: {
    type: String,
    required: true,
  },
  Result: {
    type: String,
    required: true,
  },
});

const Report = mongoose.model("Report", reportsSchema);

module.exports = Report;
