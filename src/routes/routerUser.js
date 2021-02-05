const {Router, text} = require('express');
const router = Router();


const user = require('../models/userModel');

const jwt = require('jsonwebtoken');

router.get('/user', (req, res)=> res.send("hola mundo"));

router.post('/singUp', async (req, res)=>{
  
    const {email, password} = req.body;
    const newUser = new user({email, password});
    await newUser.save();

    const token = jwt.sign({_id: newUser._id}, 'secretkey');

    res.status(200).json({token});

});

router.post('/singIn', async (req, res)=>{
  
    const {email, password} = req.body;
    const User = await user.findOne({email});
    if(!User) {return res.status(401).send("Este mail no esta registrado")};
    if(User.password !== password) {return res.status(401).send("La contraseña es incorrecta")};

    const token = jwt.sign({_id: User._id}, 'secretkey');
    return res.status(200).json({token});
});
router.get('/task', (req, res) =>{
    res.json
});

router.get('/privatetask', verifyToken, (req, res) =>{
    res.json({text: "ESTOS DATOS SON PRIVADOS"})
})

module.exports = router;

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('No esta autorizado')
    }
    const token = req.headers.authorization.split(' ')[1];

    if( token === 'null'){
        return res.status(401).send('No esta autorizado')
    }
     const payload = jwt.verify(token, 'secretkey')
     req.userIs = payload._id;
     next();

}