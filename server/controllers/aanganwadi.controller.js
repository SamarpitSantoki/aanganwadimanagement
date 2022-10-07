const Aanganwadi= require("../models/aanganwadi");

const GetAanganwadiList = async (req, res) => {
  try {
  
    // const filters = JSON.parse(filter)
      
    const {filter} =req.query;
    const filters = filter && JSON.parse(filter);
    console.log("came here");
    const exists = await Aanganwadi.find(filters ?? {}).exec();
      res.status(200).send(exists);
  } catch (error) {
    res.status(500).send(error);
  }
};

  
  const CreateAanganwadi = async(req, res) => {
   try {
    const { aanganwadiname,manager, address, sector, phoneNumber, contactPerson } =
    req.body;
    const user = new Aanganwadi({
      aanganwadiname,
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
    const updateaanganwadi = async (req, res) => {

      const updateaanganwadi = await Aanganwadi.findOneAndUpdate(
        {aanganwadiname:req.params.aanganwadiname},
        {
          $set: req.body,
        },
        { new: true }
      );
      if(updateaanganwadi)
      {
        res.status(200).send(updateaanganwadi);
      }else{
        res.status(404).json({
        message:"name not found",
    });
    };
  }
    const deleteaanganwadi = async (req, res) => {
      const { aanganwadiname } = req.params.aanganwadiname;
      const exists = await Aanganwadi.findOneAndDelete(aanganwadiname);
      res.status(200).json({
        message:"deleted successfully",
      })
    };
  
  module.exports = { CreateAanganwadi, GetAanganwadiList, deleteaanganwadi ,updateaanganwadi};
  