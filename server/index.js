const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const Login = require("./routes/login.route");
const Worker = require("./routes/worker.route");



app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connectDB = require("./database/conn");
const aanganwadi =require("./routes/aanganwadi.route")
connectDB();

//APIS FOR AUTH
//http://localhost:3000/auth/login
app.use("/auth", Login);

//APIS FOR REGISTER WORKER
app.use("/worker", Worker);

//APIS FOR REGISTER WORKER
app.use("/aanganwadi", aanganwadi);

//create api login using database

// 404 Error
// app.use((req, res, next) => {
//   next(createError(404, "Not Found"));
// });

// app.use(function (err, req, res, next) {
//   next(createError(500, "Internal Server Error"));
//   if (!err.statusCode) err.statusCode = 500;
//   return res.status(err.statusCode).send(err.message);
// });

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
