//
// Base setup
//

'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configure app to use bodyParser
// this will let us get the data from a POST request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;


//
// Database connection
//

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wiard', {useNewUrlParser: true});


//
// Routes for our API
//

var router = express.Router();

// test route to make sure everything is working
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to wiard-api!' });
});

// more routes will happen here

// register our routes
// all of our routes will be prefixed with /api
app.use('/api', router);


//
// Start the server
//

app.listen(port);
console.log('The magic happens on port ' + port);
