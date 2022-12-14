const User = require("../models/user");
const Auth = require("../models/auth");
const bcrypt = require("bcrypt");
const Aanganwadi = require("../models/aanganwadi");

const GetWorkerList = async (req, res) => {
  try {
    const { filter } = req.query;
    const filters = filter && JSON.parse(filter);
    console.log("camehere");
    const exists = await User.find(filters ?? {}).exec();
    res.status(200).send(exists);
  } catch (error) {
    res.status(500).send(error);
  }
};
const GetWorker = async (req, res) => {
  try {
    const { name } = req.params;

    console.log(name);
    const exists = await User.find({ fName: { $regex: name } });
    res.status(200).send(exists);
  } catch (error) {
    res.status(500).send(error);
  }
};

const Register = async (req, res) => {
  //this fields will come from frontend use User Schema to save this
  //query db for any existing email id reject if email exists
  // LinkedAanganwadi is an array of id's
  try {
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
    // console.log(req.body, "check");
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

      const hash = await bcrypt.hash(phoneNumber, 10);
      const user1 = new Auth({
        name: fName,
        email,
        password: hash,
        role,
      });
      console.log("heeeeeeee");
      await user1.save();
      res.status(200).send("register worker");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const UpdateWorker = async (req, res) => {
  const { id } = req.params;
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

  try {
    const exists = await User.findByIdAndUpdate(id, {
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
    if (exists) {
      if (exists.linkedAanganwadi !== linkedAanganwadi) {
        const aanganwadi = await Aanganwadi.findOne({ _id: linkedAanganwadi });
        if (aanganwadi) {
          const aanganwadi1 = await Aanganwadi.findByIdAndUpdate(
            linkedAanganwadi,
            {
              worker: exists._id,
            }
          );
        }
      }
      res.status(200).send("Updated");
    } else {
      res.status(404).send({ message: "User not Found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const DeleteWorker = async (req, res) => {
  const { id } = req.params;
  try {
    const exists = await User.findOne({ _id: id });
    if (exists) {
      const user = await User.deleteOne({ _id: id });
      return res.status(200).send("Deleted");
    } else {
      return res.status(404).send({ message: "User not Found" });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  Register,
  GetWorkerList,
  GetWorker,
  UpdateWorker,
  DeleteWorker,
};
