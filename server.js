const express = require('express');

const app = express();

app.get('/', function(req, res, next) {
    res.json('OK');
});

app.listen(8080, function() {
    console.log('Listening to port 8080');
});