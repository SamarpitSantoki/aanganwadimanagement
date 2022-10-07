const Aanganwadi= require("../models/aanganwadi");

const GetAanganwadiList = async (req, res) => {
  const {username}=req.body;
  const exists = await Aanganwadi.find({ });
    res.status(200).send(exists);
};

const GetAanganwadiListFilter = async (req, res) => {
  
    const filters = req.query;
    const filteredUsers = Aanganwadi.filter(user => {
      let isValid = true;
      for (key in filters) {
        // console.log(key, user[key], filters[key]);
        isValid = isValid && user[key] == filters[key];
      }
      return isValid;
    });
    res.send(filteredUsers);

};
  
  
  const CreateAanganwadi = async(req, res) => {
   
    //this fields will come from frontend use User Schema to save this
    //query db for any existing email id reject if email exists
    // LinkedAanganwadi is an array of id's
    const {
      username,
      manager,
      address,
      sector,
      phoneNumber,
      contactPerson
    } = req.body;
  
    const exists = await Aanganwadi.findOne({username});
    if (exists) {
      res.status(404).send({ message: "User Already Found" });
    
    } else {  
      const user = new Aanganwadi({
        username,
      manager,
      address,
      sector,
      phoneNumber,
      contactPerson
      });
      await user.save();
    
      res.status(200).send("Aanganwadi Register Successfully");
    };
    }
  
  
  module.exports = { CreateAanganwadi, GetAanganwadiList,GetAanganwadiListFilter };
  