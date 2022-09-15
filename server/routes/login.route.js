let express = require('express');
let router = express.Router();
const {login, signup}=require('../controllers/login.controllers');

router.get('/login', login);
router.post('/singup', signup);


module.exports = router;