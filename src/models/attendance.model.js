const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Attendance",
  new mongoose.Schema({
    studentId: mongoose.Schema.Types.ObjectId,
    date: String,
    status: String,
    markedBy: mongoose.Schema.Types.ObjectId
  })
);