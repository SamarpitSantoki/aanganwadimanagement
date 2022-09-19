let express = require("express");
const router = express.Router();
const { login } = require("../controllers/login.controllers");

router.post("/login", login);
// router.post('/singup', signup);

module.exports = router;
