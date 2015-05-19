var express = require('express'),
    path = require('path');
    
var app = express();

//install jade through npm
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    //renders the view empty
    res.render('empty');
});

app.get('/:viewname', function(req, res) {
    res.render(req.params.viewname);
    
    //to use something other then the default one pass into the render call
    //res.render(req.params.viewname, {layout: 'mylayout'});
})

app.listen(process.env.PORT);