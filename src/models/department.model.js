const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Department",
  new mongoose.Schema({
    name: String,
    code: String,
    status: { type: String, default: "Active" }
  })
);