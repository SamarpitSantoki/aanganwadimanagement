let express = require("express");
const router = express.Router();
const { Register, GetWorkerList,GetWorker } = require("../controllers/worker.controller");

router.get("/", GetWorkerList);
router.get("/:name", GetWorker);

router.post("/", Register);
// router.post('/singup', signup);

module.exports = router;
