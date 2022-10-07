const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  fName: {
    type: String,
    require: true,
  },
  lName: {
    type: String,
    require: true,
  },
  mName: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
  sector: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
    unique: true,
  },
  linkedAanganwadi: {
    type: [mongoose.Types.ObjectId],
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;