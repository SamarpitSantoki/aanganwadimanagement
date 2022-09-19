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
   workers: {
     type: int,
     require: true
   },  
   stock: {
     type: String,
     require: true
   },  
   contactPerson: {
     type: int,
     require: true
   },
   resourceNeeded: {
      type: Boolean,
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
   }
 });
 
 const Aanganwadi = mongoose.model("aanganwadi", AanganwadiSchema);
 
 module.exports = Aanganwadi;