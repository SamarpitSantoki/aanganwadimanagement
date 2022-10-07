let express = require("express");
const router = express.Router();
const { CreateAanganwadi,GetAanganwadiList, updateaanganwadi, deleteaanganwadi} = require("../controllers/aanganwadi.controller");
const {verifyUserToken}= require('../middleware/Auth');

router.post("/",verifyUserToken,CreateAanganwadi);
router.get("/",verifyUserToken,GetAanganwadiList);

router.delete("/:aanganwadiname", verifyUserToken , deleteaanganwadi);
router.put("/:aanganwadiname",verifyUserToken ,updateaanganwadi);

module.exports = router;
