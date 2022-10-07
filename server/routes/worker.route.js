let express = require("express");
const router = express.Router();
const { Register, GetWorkerList } = require("../controllers/worker.controller");

router.get("/", GetWorkerList);

router.post("/", Register);
// router.post('/singup', signup);

module.exports = router;
