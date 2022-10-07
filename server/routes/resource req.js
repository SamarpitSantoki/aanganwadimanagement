let express = require("express");
const router = express.Router();
const {Getresource,addresource,deleteresource,updatedresource,Getallresource } = require("../controllers/resource req");

router.get("/getresource", Getresource);
router.get("/getallresource", Getallresource);

router.post("/addresource", addresource);
router.delete("/deleteresource", deleteresource);
router.put("/updateresource", updatedresource);
// router.post('/singup', signup);

module.exports = router;
