const express = require('express');
const ch = require('./routes/character.js');
const path = require('path');
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set('view engine', "ejs");

app.use(express.static('public'))

app.get('/', function (req, res) {
    console.log('oui');
    res.send('Hello World 1 5');
});

app.use('/character', ch);

app.get('/test', function (req, res) {
    res.send('Page /test 1');
});

module.exports = app;