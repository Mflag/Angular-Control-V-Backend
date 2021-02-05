const {Router} = require('express');
const router = Router();

const user = require('../models/userModel');

router.get('/user', (req, res)=> res.send("hola mundo"));


module.exports = router;