const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');

const Task = require('../model/task');

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });


// me pinta el index
router.get('/', urlencodedParser, (req, res, next) => {
    const tasks = Task.find();
    res.render('index', {
        tasks
    });
});


// guardar los libros
router.post('/guardar', urlencodedParser, async(req, res, next) => {
    const task = new Task(req.body);
    await task.save();

    // me redirecciona a la pagina principal
    res.redirect('/');
});

module.exports = router;