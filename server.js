(function() {
    'use strict';
}());

var express         = require('express');
var app             = express();

var port = process.env.PORT || 80;

var env = "src";
if (process.argv.length > 2) {
    if (process.argv[2] === "dist") {
        env = "dist";
    }
}

app.use(express.static(env));

app.listen(port);

console.log('Environment set to ' + env);
console.log('Static files served from ' + env + '/ directory');
console.log('Server listening on port ' + port);
