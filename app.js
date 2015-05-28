
var util = require('util');
var express = require('express')
var bodyParser = require('body-parser')
var app = express();
var routes = require('./routes');


app.set('port', process.env.PORT);
app.set('views', __dirname + '/views');
app.use(express.static('static'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
routes(app);
app.listen(process.env.PORT || '3000');
