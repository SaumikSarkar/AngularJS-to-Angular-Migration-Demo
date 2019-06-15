var express = require('express');
var app = express();
app.use(express.static("app"));
app.get('/', function (req, res, next) {
    res.redirect('/');
});
app.listen(8080, 'localhost');
console.log("AngularJS to Angular Migration Project Server is listening on port 8080");