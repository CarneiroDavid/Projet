var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log('oui');
    res.send('Hello World 1 5');
});
app.get('/test', function (req, res) {
    res.send('Page /test 1');
});
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`listening port ${port}`)
});

module.exports = app;