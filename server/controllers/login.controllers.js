exports.login = async (req, res, next) => {
    const {name,email,password}=req.body;
    const hash=await bcrypt.hash(password,10);
    const user=new User({
        name,
        email,
        password:hash
    });
    await user.save();
    res.send("user created");
  }

exports.signup = async (req, res) => {
    const { email, password } = req.body;
    //check if user exists
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ error: "User does not exist" });
    }
    //check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ error: "Password is incorrect" });
    }
    //create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: 3600,
    });
    //send response
    res.status(200).json({ token });
};



