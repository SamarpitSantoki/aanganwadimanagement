const Userresource = require("../models/resourceRequest");

const Getresource = async (req, res) => {
  console.log(req.params);
  const { aanganwadiId } = req.params.aanganwadiId;
  const exists = await Userresource.find(aanganwadiId);
  res.status(200).send(exists);
};
const Getallresource = async (req, res) => {
  // const { username } = req.body;
  const exists = await Userresource.find({});
  res.status(200).send(exists);
};
const addresource = async (req, res) => {
  const {
    aanganwadiId,
    workerId,
    requestedStock,
    approvedStock,
    status,
    approvedById,
  } = req.body;
  const user = new Userresource({
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
  const { aanganwadiId } = req.params.aanganwadiId;
  const exists = await Userresource.findOneAndDelete(aanganwadiId);
  res.status(200).json({
    message:"deleted successfully",
  })
};
const updatedresource = async (req, res) => {
  const updatedresource = await Userresource.findOneAndUpdate(
    req.params.aanganwadiId,
    {
      $set: req.body,
    },
    { new: true }
  );
  res.status(200).send(updatedresource);
};

module.exports = { Getresource, addresource, deleteresource, updatedresource,Getallresource };
