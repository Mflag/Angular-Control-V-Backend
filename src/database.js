const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/control-v',{
    useNewUrlParser: true,
    useUnifiedTopology: true
   
})
 
.then(db => console.log('db is connectes'))
.catch(err => console.error(err));