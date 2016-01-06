var express = require('express');
var app = express();
var PORT = process.env.PORT || 3100;

var middleware = require('./middleware.js')

app.use(middleware.logger);

app.get('/', function(req, res) {
    res.send('Hello Express !');
});

app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send('About Us !');
});

app.use(express.static(__dirname+"/public"));

app.listen(PORT, function() {
    console.log("Express server is listening on port " + PORT);
});