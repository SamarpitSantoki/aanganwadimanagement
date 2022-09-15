const Login = require("./routes/login.route");
const bodyParser = require("body-parser");

const app = require("express")();

const bcrypt = require("bcrypt");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//APIS FOR AUTH
app.use("/auth", Login);


//create api login using database

// 404 Error
app.use((req, res, next) => {
  next(createError(404, "Not Found"));
});

app.use(function (err, req, res, next) {
  next(createError(500, "Internal Server Error"));
  if (!err.statusCode) err.statusCode = 500;
  return res.status(err.statusCode).send(err.message);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
