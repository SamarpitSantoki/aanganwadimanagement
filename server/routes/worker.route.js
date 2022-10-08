let express = require("express");
const router = express.Router();
const {
  Register,
  GetWorkerList,
  GetWorker,
  UpdateWorker,
  DeleteWorker,
} = require("../controllers/worker.controller");

router.get("/", GetWorkerList);
router.get("/:name", GetWorker);
router.put("/:id", UpdateWorker);
router.delete("/:id", DeleteWorker);

router.post("/", Register);
// router.post('/singup', signup);

module.exports = router;
