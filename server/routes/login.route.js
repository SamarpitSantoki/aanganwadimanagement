let express = require("express");
const router = express.Router();
const { Login } = require("../controllers/login.controllers");

router.get("/login", Login);
// router.post('/singup', signup);

module.exports = router;
