let express = require("express");
const router = express.Router();
const {Getresource,addresource,deleteresource,updatedresource,Getallresource } = require("../controllers/resource.controler");
const {verifyUserToken}= require('../middleware/Auth');

router.get("/getresource:aanganwadiId", verifyUserToken,Getresource);
router.get("/getallresource", verifyUserToken,Getallresource);

router.post("/addresource",verifyUserToken ,addresource);
router.delete("/deleteresource:aanganwadiId", verifyUserToken,deleteresource);
router.put("/updateresource:aanganwadiId",verifyUserToken ,updatedresource);
// router.post('/singup', signup);

module.exports = router;
