const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AanganwadiSchema = new Schema({
   
   manager: {
     type: String,
     require: true
   },
   workers: [{
     type: mongoose.Types.ObjectId,
     require: true
   }],  
   stock: [{
     type: String,
   }],  
   contactPerson: {
     type: String,
     require: true
   },
   resourceNeeded: {
      type: Boolean,
      require: false,
      default: false
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