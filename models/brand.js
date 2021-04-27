const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//this the umbrella schema

const Brand = new Schema(
  {
    name: { type: String, required: true },
    url: { type: String, required: true }
  },

  { timestamps: true },
)

module.exports = mongoose.model("brands", Brand)