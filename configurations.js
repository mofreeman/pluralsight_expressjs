var express = require('express');
var app = express();

//Define NODE_ENV=produciton prior to launching node - default is development

//Old Way
//app.configure('production', function() {
//   //middleware
//   app.set('title', 'CRM Applicaiton');
//});

//app.configure('development', function() {
//   //middleware
//   app.set('title', 'CRM Applicaiton - Development');
//});

//sets public directory - can use /sample.html
//app.configure( function() {
//    app.use(express.logger('dev'));
//    app.use(express.faicon());
//    app.use(express.static(__dirname + '/public'))
//});;

// all environments
app.use(express.static(__dirname + '/public'))

var env = process.env.NODE_ENV || 'development';
// development only
if (env == 'development') {
    app.set('title', 'CRM Applicaiton - Development');
}
// production only
if (env == 'production') {
    app.set('title', 'CRM Applicaiton');
}


app.get('/', function(req,res) {
    res.send('Value of title is ' + app.get('title'));
});

app.listen(process.env.PORT);