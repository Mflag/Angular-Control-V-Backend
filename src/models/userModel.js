const { Schema, model} = require('mongoose');

const userSchema = new Schema({
    email: {type:String},
    password: {type:String}
},{
    timestamps: true
});

module.exports = model('User', userSchema);