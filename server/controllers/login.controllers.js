const bcrypt = require("bcrypt");
const Auth = require("../models/auth");
const User = require("../models/user");

const Login = async (req, res) => {
  const { username, password } = req.body;
  const exists = await Auth.findOne({ username });
  if (exists) {
    const isPasswordValid = await bcrypt.compare(password, exists.password);
    if (isPasswordValid) {
      res.status(200).send({
        email: exists.email,
        name: exists.name,
      });
    } else {
      res.status(401).send({
        message: "Wrong UserName or Password",
      });
    }
  } else {
    res.status(404).send({ message: "User Not Found" });
  }

  // const hash = await bcrypt.compare("SamTesting@123", list[0].password);
};

const SignUp = async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = new User({
    name,
    email,
    password: hash,
  });
  await user.save();
  res.send("user created");
};

module.exports = {
  Login,
  SignUp,
};
