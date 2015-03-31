var express = require("express"),
    ejs = require("ejs"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");

// Now instantiate our express app:
var app = express();

// Set the view engine to be "EJS"
app.set('view engine', 'ejs');

// set a root route

app.get('/', function(req, res){

var cmates = [
{name: "John", age: "21"},{name: "Brett", age: "14"}, {name: "Cristina", age: "24"}];  


res.render("index", {classmates: cmates, someNumber: "1543544"}); 
}); 

app.listen(3000, function(){
	console.log( " listening on 3000"); 
}); 

// Set up body parser
app.use(bodyParser.urlencoded({extended: true}));

// Set up method override to work with POST requests that have the parameter "_method=DELETE"
app.use(methodOverride('_method'))