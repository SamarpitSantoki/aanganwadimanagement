const Aanganwadi = require("../models/aanganwadi");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const User = require("../models/user");
const GetAanganwadiList = async (req, res) => {
  try {
    // const filters = JSON.parse(filter)

    const { filter } = req.query;
    const filters = filter && JSON.parse(filter);
    const exists = await Aanganwadi.find(filters ?? {}).exec();
    return res.status(200).send(exists);
  } catch (error) {
    return res.status(500).send(error);
  }
};
const GetAanganwadi = async (req, res) => {
  try {
    // const filters = JSON.parse(filter)

    const { id } = req.params;
    const exists = await Aanganwadi.findById(id).exec();
    return res.status(200).send(exists);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const CreateAanganwadi = async (req, res) => {
  try {
    const {
      aanganwadiname,
      worker,
      address,
      sector,
      phoneNumber,
      contactPerson,
    } = req.body;
    const user = new Aanganwadi({
      aanganwadiname,
      worker,
      address,
      sector,
      phoneNumber,
      contactPerson,
    });
    await user.save();

    return res.status(200).send("Aanganwadi Register Successfully");
  } catch (error) {
    return res.status(500).send(error);
  }

  //this fields will come from frontend use User Schema to save this
  //query db for any existing email id reject if email exists
  // LinkedAanganwadi is an array of id's

  // const exists = await Aanganwadi.findOne({username});
  // if (exists) {
  // res.status(404).send({ message: "User Already Found" });

  // } else {
};

const updateaanganwadi = async (req, res) => {
  try {
    
    const updateaanganwadi = await Aanganwadi.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    if (updateaanganwadi) {
      return res.status(200).send(updateaanganwadi);
    } else {
      return res.status(404).json({
        message: "name not found",
      });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

const deleteaanganwadi = async (req, res) => {
  try {
    const { id } = req.params;
    const exists = await Aanganwadi.findByIdAndDelete(id);
    return res.status(200).json({
      message: "deleted successfully",
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const GetAanganwadiStock = async (req, res) => {
  try {
    // decode jwt token to get user id
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.decode(token);

    const user = await User.findOne({ email: decoded.email }).exec();
    console.log(user, "get stock");
    const stock = await Aanganwadi.findById(user.linkedAanganwadi).exec();
    if (stock) {
      return res.status(200).send(stock.stock);
    } else {
      return res.status(400).send("No Stock Found");
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};
const AddAanganwadiStock = async (req, res) => {
  try {
    // decode jwt token to get user id
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.decode(token);

    const user = await User.findOne({ email: decoded.email });
    console.log(user, "add stock");
    const stock = await Aanganwadi.findById(user.linkedAanganwadi).exec();
    console.log(stock);
    stock.stock = [...stock.stock, req.body];
    await stock.save();
    return res.status(200).send("Stock Added");
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  CreateAanganwadi,
  GetAanganwadiList,
  deleteaanganwadi,
  updateaanganwadi,
  GetAanganwadi,
  GetAanganwadiStock,
  AddAanganwadiStock,
};
