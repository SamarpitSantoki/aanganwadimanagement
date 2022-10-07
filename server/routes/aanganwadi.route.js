let express = require("express");
const router = express.Router();
const { CreateAanganwadi,GetAanganwadiList} = require("../controllers/aanganwadi.controller");
const {protect}= require('../middleware/Auth');

router.post("/newAanganwadi", CreateAanganwadi);
router.get("/getAanganwadiList",protect,GetAanganwadiList);


module.exports = router;
