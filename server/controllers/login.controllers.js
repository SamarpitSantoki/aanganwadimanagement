module.exports.Login = async (req, res) => {
  const { name, email, password } = req.body;
  // const hash=await bcrypt.hash(password,10);
  // const user=new User({
  //     name,
  //     email,
  //     // password:hash
  //     password
  // });
  // await user.save();
  res.send("user created");
};

<<<<<<< HEAD
=======
module.exports = {
  Login,
};
>>>>>>> ui

module.exports = {
  Login,
};
