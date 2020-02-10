const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });


router.post('/', urlencodedParser, (req, res) => {
    const titulo = req.body.titulo;
    const cali = req.body.estrella;
    console.log(titulo);
    res.send({
        titulo,
        cali
    });
});

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/nosotros', (req, res) => {
    res.render('nosotros');
});

router.get('/contacto', (req, res) => {
    res.render('contacto');
});


module.exports = router;