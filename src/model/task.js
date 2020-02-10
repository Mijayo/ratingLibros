const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
    title: String,
    valoracion: String
});

module.exports = mongoose.model('tasks', TaskSchema);