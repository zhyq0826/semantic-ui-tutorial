var express = require("express");
var path = require("path");
var nunjucks = require('nunjucks');


var app = express();
app.use('/static', express.static('static'));
nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

app.set('view engine', 'html');


app.get('/', function(req, res){
    res.render('index');
});


var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)
})
