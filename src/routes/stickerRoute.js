const {Router} = require('express');
const router = Router();

const user = require('../models/stickerModel');

router.get('/sticker', (req, res)=> res.send("hola Sticker"));


module.exports = router;