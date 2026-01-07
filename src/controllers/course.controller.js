const Course = require("../models/course.model");

exports.create = async (req, res) => {
  res.status(201).json(await Course.create(req.body));
};

exports.list = async (req, res) => {
  const filter = req.query.departmentId
    ? { departmentId: req.query.departmentId }
    : {};
  res.json(await Course.find(filter));
};