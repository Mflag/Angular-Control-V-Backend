const { Schema, model} = require('mongoose');

const stickerSchema = new Schema({
    name: {type: String, required: true },
    size: {type: String, required: true },
    price: {type: String, required: true },
    seccion: {type: String, required: true },
    imagePath: {type: String},
    created_at:{type: Date, default: Date.now}
});

module.exports = model('Sticker', StickerSchema)

const userSchema = new Schema({
    email: {type:String},
    password: {type:String}
});

module.exports = model('User', userSchema);