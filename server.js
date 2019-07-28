var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname);

app.use(express.static('dist/dev'));
app.use('favicon.ico', express.static('app/favicon.ico'));

app.get('*', function(req, res) {
    res.sendFile(rootPath + '/dist/dev/index.html');
});

app.listen(8080, 'localhost');
console.log("AngularJS to Angular Migration Project Server is listening on port 8080");