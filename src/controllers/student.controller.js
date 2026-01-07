const Student = require("../models/Student");

exports.create = async (req, res) => {
  res.status(201).json(await Student.create(req.body));
};

exports.list = async (req, res) => {
  const filter = req.query.courseId ? { courseId: req.query.courseId } : {};
  res.json(await Student.find(filter));
};
