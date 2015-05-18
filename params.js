var express = require('express');

var app = express();

// ex - customer/20
app.get('/customer/:id', function (req, res) {
    res.send('Customer selected is ' + req.params.id);
    //or
    //res.send('The customer selected is ' + req.params['id']);
});

//ex - customer?id=20
app.get('/customer', function (req, res) {
    res.send('Customer selected is ' + req.query.id);
    //or
    //res.send('The customer selected is ' + req.query['id']);
});

//range from 100...300 - using regular expressions
app.get(/^\/range\/(\d+)(?:\.\.(\d+))?$/, function(req, res) {
    var from = req.params[0];
    var to = req.params[1];
    res.send('Range of values using regular expressions for /range/' + from + '..' + to);
});

app.listen(process.env.PORT);