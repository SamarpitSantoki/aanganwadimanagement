const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  mName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  linkedAanganwadi: {
    type: mongoose.Types.ObjectId,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;