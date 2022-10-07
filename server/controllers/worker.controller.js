const GetWorkerList = (req, res) => {
  const { filter } = req.body;
};
const User = require("../models/user");


const Regiter = async(req, res) => {
  //this fields will come from frontend use User Schema to save this
  //query db for any existing email id reject if email exists
  // LinkedAanganwadi is an array of id's
  const {
    fName,
    lName,
    mName,
    email,
    role,
    sector,
    address,
    phoneNumber,
    linkedAanganwadi,
  } = req.body;
  console.log(req.body, "check");
  // check for the required fields to be non empty

  const exists = await User.findOne({ email });
  if (exists) {
    res.status(404).send({ message: "User already Found" });
  } else {
    const user = new User({
      fName,
      lName,
      mName,
      email,
      role,
      sector,
      address,
      phoneNumber,
      linkedAanganwadi,
    });
    await user.save();

    res.send("register worker");
  };
  }


module.exports = { Regiter, GetWorkerList };
