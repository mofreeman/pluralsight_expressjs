var express = require('express');
var app = express();

//Define NODE_ENV=produciton prior to launching node - default is development
app.configure('production', function() {
   //middleware
   app.set('title', 'CRM Applicaiton');
});


app.configure('development', function() {
   //middleware
   
   app.set('title', 'CRM Applicaiton - Development');
});

app.get('/', function(req,res) {
    
    res.send('Value of title is ' + app.get('title'));
});

app.listen(process.env.PORT);