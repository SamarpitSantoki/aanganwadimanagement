const app=import("express")();

//api for singup
app.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    //check if user already exists
    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ error: "User already exists" });
    }
    //create new user
    const newUser = new User({ email, password });
    //save user
    await newUser.save();
    //send response
    res.status(200).json({ message: "User created" });
});



//create api login
app.post("/login",(req,res)=>{
    //get username and password from request
    var {username, password} = req.body;

    //check username and password
    if(username=="admin" && password=="123456"){
        //create token
        var token=jwt.sign({username:username},"secret",{expiresIn:60*60});
        //return token
        res.json({token:token});
    }else{
        res.json({message:"login failed"});
    }
});


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});