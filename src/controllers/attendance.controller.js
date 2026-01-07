const Attendance = require("../models/Attendance");

exports.mark = async (req, res) => {
  res.status(201).json(await Attendance.create(req.body));
};

exports.list = async (req, res) => {
  res.json(await Attendance.find(req.query));
};