const express = require('express');

var log = require('morgan')('dev');
var bodyParser = require('body-parser');

var properties = require('./config/properties');
var db = require('./config/database');

//hero routes
var herosRoutes = require('./api/heros.routes');
var app = express();

//configure bodyparser
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

//initialise express router
var router = express.Router();

// call the database connectivity function
db();

// configure app.use()
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// Pretify JSON response
app.set('json spaces', 2);

// Error handling
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
    next();
});

// use express router
app.use('/api',router);
//call heros routing
herosRoutes(router);

// listening to the server on 4000 port
app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on ${properties.PORT} port.`);
})