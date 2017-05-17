var express = require("express");
var path = require("path");
var nunjucks = require('nunjucks');


var app = express();
app.use('/static', express.static('static'));
nunjucks.configure('templates', {
    autoescape: true,
    express: app,
    watch: true
});

app.set('view engine', 'html');


app.get('/', function(req, res){
    res.render('index');
});

app.get('/container', function(req, res){
    res.render('container');
});

app.get('/content-align', function(req, res){
    res.render('content_align');
});

app.get('/list', function(req, res){
    res.render('list');
});
app.get('/grid', function(req, res){
    res.render('grid');
});

app.get('/layout-github', function(req, res){
    res.render('layout-github');
});

app.get('*', function(req, res){
    res.render(req.path.replace('\/',''));
});

var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)
})
