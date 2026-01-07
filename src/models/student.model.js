const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Student",
  new mongoose.Schema({
    name: String,
    rollNumber: String,
    courseId: mongoose.Schema.Types.ObjectId,
    departmentId: mongoose.Schema.Types.ObjectId,
    parentId: mongoose.Schema.Types.ObjectId,
    status: String
  })
);
