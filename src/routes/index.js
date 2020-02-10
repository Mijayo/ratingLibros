const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });


// me pinta el index
router.get('/', urlencodedParser, (req, res) => {
    res.render('index');
});


// guarda los libros en el JSON
router.get('/guardar', (req, res) => {

    const titulo = req.body.titulo;
    const calificacion = req.body.valor;

    let arrayLocal = [];

    // obj libro
    let libro = { nombre: titulo, valoracion: calificacion };

    arrayLocal.push(libro);

    // escribe los datos en el archivo json
    fs.writeFileSync("./src/json/libros.json", JSON.stringify(arrayLocal));

    // me redirecciona a la pagina principal
    res.redirect('/');
});

router.get('/cargar', urlencodedParser, (req, res) => {

    let contenido = fs.readFileSync("./src/json/libros.json", "utf-8");

    res.setHeader("content-type", "text/json");
    res.send(contenido);

});

module.exports = router;