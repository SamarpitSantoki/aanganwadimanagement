let express = require("express");
const router = express.Router();
const { Regiter, GetWorkerList } = require("../controllers/worker.controller");

router.get("/getworkerlist", GetWorkerList);

router.post("/", Regiter);
// router.post('/singup', signup);

module.exports = router;
