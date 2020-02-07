// requires - express
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
const routes = require('../routes/index');

// rutas
app.use('/', routes);

// vistas
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// estilos
app.use(express.static(path.join(__dirname, '../views')));

// puerto
app.listen(3000, console.log('escuchando en el 3000'));