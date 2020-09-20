const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/library', { useNewUrlParser: true })
.catch(err => console.log('err', err))

const db = mongoose.connection;

module.exports = db;