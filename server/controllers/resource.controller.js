const resourceRequest = require("../models/resourceRequest");

const Getresource = async (req, res) => {
  console.log(req.params);
  const { aanganwadiId } = req.params;
  const exists = await resourceRequest.find({
    aanganwadiId: aanganwadiId,
  });
  res.status(200).send(exists);
};
const Getallresource = async (req, res) => {
  // const { username } = req.body;
  const exists = await resourceRequest.find({});
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
  const user = new resourceRequest({
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
  const exists = await resourceRequest.findOneAndDelete(aanganwadiId);
  res.status(200).json({
    message:"deleted successfully",
  })
};
const updatedresource = async (req, res) => {
  try{
    console.log(req.params.aanganwadiId);
    const updatedresource = await resourceRequest.findOneAndUpdate(
      {aangalwadi :req.params.aanganwadiId},
      {
        $set: req.body,
      },
      { new: true }
      );
  console.log(updatedresource);
  if(updatedresource)
  {
    res.status(200).send(updatedresource);

  }else{
    res.status(404).json({
      message:"id not found",
    });
  }
} catch (e){
  res.status(404).send(e)
}
};

module.exports = { Getresource, addresource, deleteresource, updatedresource,Getallresource };
