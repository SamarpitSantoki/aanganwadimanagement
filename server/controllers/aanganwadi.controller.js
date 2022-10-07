const Aanganwadi= require("../models/aanganwadi");

const GetAanganwadiList = async (req, res) => {
  try {
  
    const {filter} = req.query
    // const filters = JSON.parse(filter)
      
    
    const exists = await Aanganwadi.find(filter || {});
      res.status(200).send(exists);
  } catch (error) {
    res.status(500).send(error);
  }
};

  
  const CreateAanganwadi = async(req, res) => {
   try {
    const { manager, address, sector, phoneNumber, contactPerson } =
    req.body;
    const user = new Aanganwadi({
       
      manager,
      address,
      sector,
      phoneNumber,
      contactPerson
      });
      await user.save();
    
      res.status(200).send("Aanganwadi Register Successfully");
   } catch (error) {
      res.status(500).send(error);
   }
    
    //this fields will come from frontend use User Schema to save this
    //query db for any existing email id reject if email exists
    // LinkedAanganwadi is an array of id's
   
    // const exists = await Aanganwadi.findOne({username});
    // if (exists) {
      // res.status(404).send({ message: "User Already Found" });
    
    // } else {  
      
    };
    // }
  
  
  module.exports = { CreateAanganwadi, GetAanganwadiList };
  