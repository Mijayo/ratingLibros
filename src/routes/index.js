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

    // guardo los datos del form en variables
    let titulo = req.query.titulo;
    let calificacion = req.query.valor;

    // creo el obj libro
    let libro = { "nombre": titulo, "valoracion": calificacion };

    let datos = JSON.parse(fs.readFileSync("./src/json/libros.json", "utf-8"));

    datos.push(libro);

    // escribe los datos en el archivo json
    fs.writeFileSync("./src/json/libros.json", JSON.stringify(datos));

    // me redirecciona a la pagina principal
    res.redirect('/');
});

// btn de cargar libros
router.get('/cargar', urlencodedParser, (req, res) => {

    // lee el contenido del archivo libros.json
    let contenido = fs.readFileSync("./src/json/libros.json", "utf-8");
    let cont = JSON.parse(contenido);

    // arrya local
    let v = [];
    // for each del contenido en libros.json
    cont.forEach(element => {
        v.push(element);
    });

    // renderizo el index y le paso el array local
    res.render('index', { "libro": v });
});


// btn que me pinta los libros en formato JSON
router.get("/librojson", (req, res) => {
    // lee el archivo libros.json
    let contenido = fs.readFileSync("./src/json/libros.json", "utf-8");

    // seteo la cabecera a json
    res.setHeader("content-type", "text/json");
    res.send(contenido);
});

module.exports = router;