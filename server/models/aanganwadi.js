const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AanganwadiSchema = new Schema({
  aanganwadiname:{
      type:String,
      required:true,
      unique:true,
  },
  manager: {
    type: String,
    require: true,
  },
  workers: [
    {
      type: mongoose.Types.ObjectId,
    },
  ],
  stock: [
    {
      type: String,
    },
  ],
  contactPerson: {
    type: String,
    require: true,
  },
  resourceNeeded: {
    type: Boolean,
    require: false,
    default: false,
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
  },
});

const Aanganwadi = mongoose.model("aanganwadi", AanganwadiSchema);

module.exports = Aanganwadi;
