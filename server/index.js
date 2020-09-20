const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db/index');
const app = express()
const apiPort = 8080;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', () => console.log('Mongo DB connection error.'));

app.get('/', (req, res, next) => {
    res.send('Hello World');
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}.`));