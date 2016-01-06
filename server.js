var express = require('express');
var app = express();
var PORT = 3100;

var middleware = {
    requireAuthentication: function(req,res, next) {
        console.log("Private route hit!");
        next();
    },
    logger: function(req,res,next) {
        var date = new Date().toString();
        console.log("%s %s %s", date, req.method, req.originalUrl);
        next();
    },
};

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