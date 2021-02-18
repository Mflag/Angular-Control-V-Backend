const { Schema, model} = require('mongoose');

const userSchema = new Schema({
    nombre:{type:String},
    email: {type:String},
    telefono: {type:String},
    password: {type:String},
    confirmacion:{type:String}

},{
    timestamps: true
});

module.exports = model('User', userSchema);