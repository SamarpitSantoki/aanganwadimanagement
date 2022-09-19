let express = require("express");
const router = express.Router();
const { login, singup } = require("../controllers/login.controllers");

router.post("/login", login);
router.post("/singup", singup);
// router.post('/singup', signup);

module.exports = router;
