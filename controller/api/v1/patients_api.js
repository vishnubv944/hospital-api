const Patient = require("../../../models/patients");
const Report = require("../../../models/reports");
module.exports.register = async (req, res) => {
  const data = {
    id: req.body.id,
    Name: req.body.name,
    Age: req.body.age,
    Gender: req.body.gender,
    Email: req.body.email,
    PhoneNumber: req.body.phno,
    BloodGroup: req.body.bloodGroup,
    Report: req.body.Report,
  };

  try {
    await Patient.create({
      id: req.body.id,
      Name: req.body.name,
      Age: req.body.age,
      Gender: req.body.gender,
      Email: req.body.email,
      PhoneNumber: req.body.phno,
      BloodGroup: req.body.bloodGroup,
      Report: req.body.Report,
    });
  } catch (err) {
    return res.status(422).json({
      message: `Error with the database ${err}`,
    });
  }
  return res.status(200).json({
    message: "Details Added",
  });
};

module.exports.createReport = async (req, res) => {
  try {
    let user = await Patient.findOne({ id: req.params.id });
    if (!user) {
      return res.json(422, {
        message: "User not found",
      });
    }
    return res.json(200, {
      message: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    console.log(err);
    return res.json(500, {
      message: "internl server error",
    });
  }
};

module.exports.allReports = async (req, res) => {
  id = req.params.status;
  values = [];
  try {
    let data = await Patient.findOne({ id: req.params.id })
      .populate("Report")
      .then((reportData) => {
        return res.json(200, {
          message: "success",
          data: {
            reportData,
          },
        });
      });
  } catch (err) {
    return res.json(500, {
      message: "internl server error",
    });
  }
};
