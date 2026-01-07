const Department = require("../models/Department");

exports.create = async (req, res) => {
  const dept = await Department.create(req.body);
  res.status(201).json(dept);
};

exports.list = async (req, res) => {
  res.json(await Department.find());
};
