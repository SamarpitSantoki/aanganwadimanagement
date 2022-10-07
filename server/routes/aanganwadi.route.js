let express = require("express");
const router = express.Router();
const { CreateAanganwadi,GetAanganwadiList, GetAanganwadiListFilter} = require("../controllers/aanganwadi.controller");


router.post("/newAanganwadi", CreateAanganwadi);
router.get("/getAanganwadiList", GetAanganwadiList);
router.get("/getAanganwadiListFilter", GetAanganwadiListFilter);


module.exports = router;
