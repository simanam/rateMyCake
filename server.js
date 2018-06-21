var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/mongoose.js')
require('./server/config/routes_config.js')(app);

app.listen(7000, function(){
    console.log("listening on port 7000")
})