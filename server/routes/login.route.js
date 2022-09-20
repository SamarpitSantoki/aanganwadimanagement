let express = require("express");
const router = express.Router();
const { Login, SignUp } = require("../controllers/login.controllers");

router.post("/login", Login);
router.post("/singup", SignUp);

module.exports = router;
