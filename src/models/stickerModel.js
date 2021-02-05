const { Schema, model} = require('mongoose');

const stickerSchema = new Schema({
    name: {type: String, required: true },
    size: {type: String, required: true },
    cod: {type: String, required: true },
    seccion: {type: String, required: true },
    imagePath: {type: String},
    created_at:{type: Date, default: Date.now}
});

module.exports = model('Sticker', stickerSchema);