var express = require('express');
var app = express();
var path = require('path');
var routes = require('./api/routes');
var bodyParser = require('body-parser');
var PORT = 'port';
var port = process.env.PORT || 3000;
app.set(PORT, port);

app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});


// static set for the homepage 
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', routes);

var server = app.listen(app.get(PORT), function () {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});