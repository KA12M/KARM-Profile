const KARM = require("../models/karm.model");

module.exports.getData = async (req, res) => {
  const data = await KARM.findOne().select("-__v");
  
  res.status(200).json({
    message: "success",
    data,
  });
};

module.exports.editData = async (req, res) => {
  const result = await KARM.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    message: "success",
    data: result,
  });
};
