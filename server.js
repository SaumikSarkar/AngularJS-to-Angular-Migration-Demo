var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname);

app.use(express.static('dist/dev'));
app.use('favicon.ico', express.static('app/favicon.ico'));
app.use('/styles.css', express.static('app/styles.css'));
app.use('/createEvent/createEvent.component.css', express.static('app/createEvent/createEvent.component.css'));
app.use('/homePage/homePage.component.css', express.static('app/homePage/homePage.component.css'));

app.get('*', function(req, res) {
    res.sendFile(rootPath + '/dist/dev/index.html');
});

app.listen(8080, 'localhost');
console.log("AngularJS to Angular Migration Project Server is listening on port 8080");