require('dotenv').config();
var app = require('./config/express')();

const port = 3000;

app.listen(port, () => console.log(`Rodando na port ${port}`));