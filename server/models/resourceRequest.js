const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  
  aanganwadiId: {
    type: String,
    unique: true,
    require: true
  },
  workerId: {
    type: String,
    unique: true,
    require: true
  },
  requestedStock: {
    type: String,
    require: true
  },
  approvedStock: {
    type: String,
    require: true
  },
  status: {
    type: String,
    require: true
  },
  approvedById: {
    type: String,
    require: true
  }
});

const Resource = mongoose.model("resource", ResourceSchema);

module.exports = Resource;