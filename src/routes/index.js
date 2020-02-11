const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });


// me pinta el index
router.get('/', urlencodedParser, (req, res) => {
    res.render('index', { "libro": [] });
});


// guarda los libros en el JSON
router.get('/guardar', (req, res) => {

    let titulo = req.query.titulo;
    let calificacion = req.query.valor;

    // obj libro
    let libro = { "nombre": titulo, "valoracion": calificacion };

    let datos = JSON.parse(fs.readFileSync("./src/json/libros.json", "utf-8"));

    datos.push(libro);

    // escribe los datos en el archivo json
    fs.writeFileSync("./src/json/libros.json", JSON.stringify(datos));

    // me redirecciona a la pagina principal
    res.redirect('/');
});

router.get('/cargar', urlencodedParser, (req, res) => {

    let contenido = fs.readFileSync("./src/json/libros.json", "utf-8");
    let cont = JSON.parse(contenido);

    let v = [];
    cont.forEach(element => {
        v.push(element);
    });
    res.render('index', { "libro": v });

});

router.get("/librojson", (req, res) => {
    let contenido = fs.readFileSync("./src/json/libros.json", "utf-8");

    res.setHeader("content-type", "text/json");
    res.send(contenido);
});

module.exports = router;