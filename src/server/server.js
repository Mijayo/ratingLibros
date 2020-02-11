const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const routes = require('../routes/index');

// rutas
app.use('/', routes);

// vistas
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// estilos
app.use(express.static(path.join(__dirname, '../views')));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));

// puerto
app.listen(process.env.PORT || 3000, console.log('escuchando en el 3000'));