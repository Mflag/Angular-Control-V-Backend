const express = require('express');
const app = express();
const cors = require('cors');


require('./database');

app.use(cors());
app.use(express.json());

//Rutas
app.use('/api', require('./routes/routerUser'));
app.use('/api/sticker', require('./routes/stickerRoute'));


app.listen(3000);
console.log('Server on port ', 3000);