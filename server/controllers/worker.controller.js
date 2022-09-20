const GetWorkerList = (req, res) => {
  const { filter } = req.body;
};

const Regiter = (req, res) => {
  //this fields will come from frontend use User Schema to save this
  //query db for any existing email id reject if email exists
  // LinkedAanganwadi is an array of id's
  const {
    fname,
    lname,
    mname,
    email,
    role,
    sector,
    address,
    phoneNumber,
    LinkedAanganwadi,
  } = req.body;

  res.send("register worker");
};

module.exports = { Regiter, GetWorkerList };
