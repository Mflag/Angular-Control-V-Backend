const {Router} = require('express');
const router = Router();

const user = require('../models/userModel');

router.get('/user', (req, res)=> res.send("hola mundo"));

router.post('/singUp', async (req, res)=>{
  
    const {email, password} = req.body;
    const newUser = new user({email, password});
    console.log(newUser)
    await newUser.save();
    res.send('testing');

})


module.exports = router;