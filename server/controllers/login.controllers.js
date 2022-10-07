const bcrypt = require("bcrypt");
const Auth = require("../models/auth");
const User = require("../models/user");

const Login = async (req, res) => {
  const { username, password } = req.body;
  const exists = await Auth.findOne({ username });
  if (exists) {
    const isPasswordValid = await bcrypt.compare(password, exists.password);
    if (isPasswordValid) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).send({
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
  const user = new Auth({
    name,
    email,
    password: hash,
  });
  await user.save();
  generateToken(email, password);
  if (user) {
    res.json({
      message: "user created successfully",
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};

const generateToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
module.exports = {
  Login,
  SignUp,
};
