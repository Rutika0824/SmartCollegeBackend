const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    departmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
    duration: String,
    status: String
  })
);