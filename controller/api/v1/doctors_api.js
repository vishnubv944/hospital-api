const Doctor = require("../../../models/doctors");
const jwt = require("jsonwebtoken");

module.exports.register = async (req, res) => {
  const data = {
    id: req.body.id,
    Name: req.body.name,
    Username: req.body.username,
    Password: req.body.password,
    Email: req.body.email,
    PhoneNumber: req.body.phno,
  };

  try {
    await Doctor.create({
      id: req.body.id,
      Name: req.body.name,
      Username: req.body.username,
      Password: req.body.password,
      Email: req.body.email,
      PhoneNumber: req.body.phno,
    });
  } catch (err) {
    return res.status(422).json({
      message: "Error with the database",
    });
  }
  return res.status(200).json({
    message: "Details Added",
  });
};

module.exports.login = async (req, res) => {
  const data = {
    Username: req.body.username,
    Password: req.body.password,
  };

  try {
    let user = await Doctor.findOne({ Username: req.body.username });
    if (!user) {
      return res.json(422, {
        message: "User not found",
      });
    }

    if (user.Password != req.body.password) {
      return res.json(422, {
        message: "Invalid Password",
      });
    }

    return res.json(200, {
      message: "signed in successfull, find your token below and keep it safe",
      data: {
        token: jwt.sign(user.toJSON(), "sociout", { expiresIn: 100000 }),
      },
    });
  } catch (err) {
    console.log(err);
    return res.json(500, {
      message: "internl server error",
    });
  }
};
