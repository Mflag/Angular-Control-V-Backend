const express = require('express');
const app = express();


require('./database');

//Rutas
app.use('/api', require('./routes/routerUser'));
app.use('/api', require('./routes/stickerRoute'));


app.listen(3000);
console.log('Server on port ', 3000);