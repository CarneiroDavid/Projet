const express = require('express');
const app = express();

app.get('/', function (req, res) {
    console.log('oui');
    res.send('Hello World 1 5');
});

app.get('/test', function (req, res) {
    res.send('Page /test 1');
});

module.exports = app;