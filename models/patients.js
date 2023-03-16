const mongoose = require("mongoose");

const patientsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Age: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: String,
    required: true,
  },
  BloodGroup: {
    type: String,
    required: true,
  },
  Report: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Report",
      enum: ["Report"],
    },
  ],
});

const Patient = mongoose.model("Patient", patientsSchema);

module.exports = Patient;
