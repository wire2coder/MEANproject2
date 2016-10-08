// Create an Express web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var customers = require('./routes/customers.js');
var invoices = require('./routes/invoices.js');

mongoose.connect('mongodb://localhost/patracking', function(err) {
    if (err) {
        throw err;
    }

    console.log('Server: Mongoose is connected to MongoDB');
});
var db = mongoose.connection;

app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));
app.use(bodyParser.json());

app.use('/api/customers', customers);
app.use('/api/invoices', invoices);

app.get('/', function (req, res) {
    res.send('Please use localhost/api/customers or localhost/api/invoices');
});


app.listen(3000);
console.log('Started on port 3000');