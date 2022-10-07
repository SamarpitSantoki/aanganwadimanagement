const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Auth = require("../models/auth");
const User = require("../models/user");

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const exists = await Auth.findOne({ email });
    if (exists) {
      const isPasswordValid = await bcrypt.compare(password, exists.password);
      if (isPasswordValid) {
        var token = jwt.sign(
          {
            id: email,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: 86400,
          }
        );

        res.status(200).json({
          token: token,
          name: exists.name,
          email: exists.email,
          message: "login succesfuly",
        });
      } else {
        res.status(400).send({
          message: "Wrong UserName or Password",
        });
      }
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }

  // const hash = await bcrypt.compare("SamTesting@123", list[0].password);
};

const SignUp = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).send(error);
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
