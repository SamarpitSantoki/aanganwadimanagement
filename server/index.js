const { login } = require("./routes/login.route");
const bodyParser=require('body-parser');

const app=require("express")();

const bcrypt=import("bcrypt");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', login);

//api for singup using bcrypt

//create api login using database


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});



// 404 Error
app.use((req, res, next) => {
  next(createError(404, 'Not Found'));
});

app.use(function (err, req, res, next) {
  next(createError(500, 'Internal Server Error'));
  if (!err.statusCode) err.statusCode = 500;
  return res.status(err.statusCode).send(err.message);
});