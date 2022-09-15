let express = require('express');
const router = express.Router();
const {login}=require('../controllers/login.controllers');

router.get('/login', login);
// router.post('/singup', signup);


module.exports = router;