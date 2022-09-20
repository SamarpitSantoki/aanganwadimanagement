let express = require("express");
const router = express.Router();
const { CreateAanganwadi,GetAanganwadiList} = require("../controllers/aanganwadi.controller");


router.post("/newAanganwadi", CreateAanganwadi);
router.get("/getAanganwadiList", GetAanganwadiList);


module.exports = router;
