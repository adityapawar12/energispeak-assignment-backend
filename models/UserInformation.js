const mongoose = require("mongoose");

const userInformationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

module.exports = mongoose.model("UserInformation", userInformationSchema);
