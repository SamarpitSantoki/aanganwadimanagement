let express = require("express");
const router = express.Router();
const { Login, SignUp } = require("../controllers/login.controllers");
const {protect} =require("../middleware/Auth");
router.post("/login", Login);
router.post("/singup", SignUp);

module.exports = router;
    