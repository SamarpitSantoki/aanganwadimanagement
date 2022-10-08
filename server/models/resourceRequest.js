const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  
  aanganwadiId: {
    type: String,
    unique: true,
    required: true
  },
  workerId: {
    type: String,
    unique: true,
    required: true
  },
  requestedStock: {
    type: String,
    required: true
  },
  approvedStock: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  approvedById: {
    type: String,
    required: true
  }
});

const Resource = mongoose.model("resource", ResourceSchema);

module.exports = Resource;