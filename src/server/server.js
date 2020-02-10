const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const routes = require('../routes/index');


// rutas
app.use('/', routes);

// vistas
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// estilos
app.use(express.static(path.join(__dirname, '../views')));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));

// bbdd
// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

// puerto
app.listen(process.env.PORT || 3000, console.log('escuchando en el 3000'));