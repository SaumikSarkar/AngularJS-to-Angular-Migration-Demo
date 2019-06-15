var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname);

app.use(express.static("app"));

app.get('*', function(req, res) {
    res.sendFile(rootPath + '/app/index.html');
});

app.listen(8080, 'localhost');
console.log("AngularJS to Angular Migration Project Server is listening on port 8080");