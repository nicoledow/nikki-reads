require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db/index');
const app = express()
const apiPort = 8080;

const clientDomain = process.env.CLIENT_DOMAIN

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());


app.use(bodyParser.json())

db.on('error', () => console.log('Mongo DB connection error.'));

const bookRoutes = require('./routes/books');
app.use(bookRoutes);

const userRoutes = require('./routes/users');
app.use(userRoutes);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}.`));