const mongoose= require("mongoose");
require('dotenv').config();

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.DBURL,
        {
            useNewUrlParser: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
            useUnifiedTopology: true
        });
        
    console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports=connectDB;