const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthSchema = new Schema({
  username: {
    type: String,
    unique: true,
    require: true
  },  
  password: {
    type: String,
    require: true,
    unique: true
  }
});

const Auth = mongoose.model("auth", AuthSchema);

module.exports = Auth;