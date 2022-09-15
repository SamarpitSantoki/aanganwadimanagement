const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  username: {
    type: String,
    unique: true,
    require: true
  },
  aanganwadiId: {
    type: int,
    unique: true,
    require: true
  },
  workerId: {
    type: int,
    unique: true,
    require: true
  },
  requestedStock: {
    type: int,
    require: true
  },
  approvedStock: {
    type: int,
    require: true
  },
  status: {
    type: String,
    require: true
  },
  approvedById: {
    type: int,
    require: true,
    unique: true
  }
});

const Resource = mongoose.model("resource", ResourceSchema);

module.exports = Resource;