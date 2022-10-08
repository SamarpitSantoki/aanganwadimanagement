let express = require("express");
const router = express.Router();
const {
  CreateAanganwadi,
  GetAanganwadiList,
  updateaanganwadi,
  deleteaanganwadi,
  GetAanganwadi,
  GetAanganwadiStock,
  AddAanganwadiStock,
} = require("../controllers/aanganwadi.controller");
const { verifyUserToken } = require("../middleware/Auth");

router.post("/", verifyUserToken, CreateAanganwadi);
router.get("/", verifyUserToken, GetAanganwadiList);
router.get("/stock", verifyUserToken, GetAanganwadiStock);
router.post("/stock", verifyUserToken, AddAanganwadiStock);
router.get("/:id", verifyUserToken, GetAanganwadi);

router.delete("/:id", verifyUserToken, deleteaanganwadi);
router.put("/:id", verifyUserToken, updateaanganwadi);

module.exports = router;
