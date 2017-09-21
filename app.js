var express = require('express')
var app = express()

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/web'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function (req, res) {
     res.render('index');
})

app.get('/search/:user/:playlist', function (req, res) {
     res.render('index');
})


app.listen(8080);