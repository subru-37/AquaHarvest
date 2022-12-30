const mongoose = require("mongoose");

const FarmSchema = new mongoose.Schema({
  userToken: { type: String, required: false },
  name: { type: String, required: true },
  email: { type: String, required: true },
  bio: { type: String, required: true },
  location: { type: String, required: true },
  // password: { type: String, required: true },
  // confirmPassword: { type: String, required: true },
  // totalNumberOfTanks: { type: Number, required: true },
});

module.exports = mongoose.model("Farm", FarmSchema);
