const Reports = require("../../../models/reports");

module.exports.status = async (req, res) => {
  //console.log(req.params.status);

  try {
    let report = await Reports.findOne({ status: req.params.id });
    if (!report) {
      return res.json(422, {
        message: "No Data found",
      });
    }
    return res.json(200, {
      message: "success",
      data: {
        report,
      },
    });
  } catch (err) {
    console.log(err);
    return res.json(500, {
      message: "internl server error",
    });
  }
};
