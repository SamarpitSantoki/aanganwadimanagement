const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AanganwadiSchema = new Schema({
   username: {
     type: String,
     unique: true,
     require: true
   },
   manager: {
     type: String,
     require: true
   },
   workers: [{
     type: String,
     require: true
   }],  
   stock: [{
     type: String,
     require: true
   }],  
   contactPerson: {
     type: String,
     require: true
   },
   resourceNeeded: {
      type: Boolean,
      require: false
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
    type: Number,
    require: true
   }
 });
 
 const Aanganwadi = mongoose.model("aanganwadi", AanganwadiSchema);
 
 module.exports = Aanganwadi;