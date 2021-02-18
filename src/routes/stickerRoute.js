const {Router} = require('express');
const router = Router();

const Sticker = require('../models/stickerModel');

router.get('/', async (req, res) => {
    const stickers = await Sticker.find(); 
    console.log('la concha de tu madre');
    res.json(stickers);
});

router.post('/', async (req, res) =>{
    const {name, size, cod, seccion}= req.body;
    //const imagePath ='/uploads/' + req.file.filename;
    const newSticker= new Sticker({name, size, cod, seccion/*, imagePath*/});
    await newSticker.save();
    res.json('Sticker guardado')
})

router.delete('/:id', async (req, res) =>{
const delSticker = await Sticker.findByIdAndDelete(req.params.id);
console.log(delSticker);
res.send('eliminando')

});

module.exports = router;