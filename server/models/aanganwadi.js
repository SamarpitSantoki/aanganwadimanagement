const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AanganwadiSchema = new Schema({
  aanganwadiname: {
    type: String,
    required: true,
    unique: true,
  },
  worker: {
    type: mongoose.Types.ObjectId,
  },
  stock: [
    {
      type: String,
    },
  ],
  contactPerson: {
    type: String,
    required: true,
  },
  resourceNeeded: {
    type: Boolean,
    required: false,
    default: false,
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
});

const Aanganwadi = mongoose.model("aanganwadi", AanganwadiSchema);

module.exports = Aanganwadi;
