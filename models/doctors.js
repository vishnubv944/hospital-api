const mongoose = require("mongoose");

const doctorsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Username: {
    type: String,
    required: true,
  },
  Password: {
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
});

const Doctor = mongoose.model("Doctor", doctorsSchema);

module.exports = Doctor;
