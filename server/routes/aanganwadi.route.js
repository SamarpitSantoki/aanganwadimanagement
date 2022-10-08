let express = require("express");
const router = express.Router();
const {
  CreateAanganwadi,
  GetAanganwadiList,
  updateaanganwadi,
  deleteaanganwadi,
  GetAanganwadi,
} = require("../controllers/aanganwadi.controller");
const { verifyUserToken } = require("../middleware/Auth");

router.post("/", verifyUserToken, CreateAanganwadi);
router.get("/", verifyUserToken, GetAanganwadiList);
router.get("/:id", verifyUserToken, GetAanganwadi);

router.delete("/:id", verifyUserToken, deleteaanganwadi);
router.put("/:id", verifyUserToken, updateaanganwadi);

module.exports = router;
