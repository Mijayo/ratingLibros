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

// MongoDB
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('DATA BASE connected'))
    .catch(err => console.log(err));

// puerto
app.listen(process.env.PORT || 3000, console.log('escuchando en el 3000'));