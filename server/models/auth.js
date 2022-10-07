const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthSchema = new Schema({
  name: {
    type: String,
    require: true
  },  
  email: {
    type: String,
    unique: true,
    require: true
  },  
  password: {
    type: String,
    require: true

  }
});

const Auth = mongoose.model("auth", AuthSchema);

module.exports = Auth;