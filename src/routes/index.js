const express = require('express');
const router = express.Router();

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