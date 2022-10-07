let express = require("express");
const router = express.Router();
const { CreateAanganwadi,GetAanganwadiList} = require("../controllers/aanganwadi.controller");
const {verifyUserToken}= require('../middleware/Auth');

router.post("/newAanganwadi", CreateAanganwadi);
router.get("/getAanganwadiList",verifyUserToken,GetAanganwadiList);


module.exports = router;
