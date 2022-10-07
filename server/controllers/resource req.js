const Userresource = require("../models/resourceRequest");

const Getresource = async (req, res) => {
  const { resorceid } = req.params.resorceid;
  const exists = await Userresource.findById(resorceid);
  res.status(200).send(exists);
};
const Getallresource = async (req, res) => {
  // const { username } = req.body;
  const exists = await Userresource.find({});
  res.status(200).send(exists);
};
const addresource = async (req, res) => {
  const {
    username,
    aanganwadiId,
    workerId,
    requestedStock,
    approvedStock,
    status,
    approvedById,
  } = req.body;
  const user = new Userresource({
    username,
    aanganwadiId,
    workerId,
    requestedStock,
    approvedStock,
    status,
    approvedById,
  });
  await user.save();

  res.status(200).send("resource Register Successfully");
};

const deleteresource = async (req, res) => {
  const { resorceid } = req.params.resorceid;
  const exists = await Userresource.findByIdAndDelete(resorceid);
  res.status(200).send(exists);
};
const updatedresource = async (req, res) => {
  const updatedresource = await Userresource.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  res.status(200).send(updatedresource);
};

module.exports = { Getresource, addresource, deleteresource, updatedresource,Getallresource };
