const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  fName: {
    type: String,
    require: true
  },  
  lName: {
    type: String,
    require: true
  },  
  mName: {
    type: String,
    require: true
  },  
  password: {
    type: String,
    require: true,
    unique: true
  },
  role: {
   type: String,
   require: true
  },
  sector: {
   type: String,
   require: true
  },
  address: {
   type: String,
   require: true
  },
  phoneNumber: {
   type: int,
   require: true,
   unique: true
  },
  linkedAanganwadi: {
   type: int,
   require: true
  }
});
