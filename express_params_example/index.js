// index.js
// The control file for a node server that will help us demonstrate how
// URL params and query params work.

// So as is typical for node apps, the first thing we do is to initialize our npm modules and assign them to variables.
var express = require("express");
var app = express();

// So let's define some routes to use:

app.get('/', function(request, response){
response.send("<html><body><h2>Example App</h2><p>something</p>");
})

// This route catches URLs that have a path that matches http://localhost:3000/person/:name
app.get('/person/:name', function(request, response){

var html = "<html><body>";
   html += "<h2>URL and Query Params</h2>";
   html += "<p>The following information was provided:</p>";
   html += "<ul>";
   html += "<li>params.name = " + request.params.name + "</li>";
   html += "<li>query.age = " + request.query.age + "</li>";
   html += "<li>all query params: " + JSON.stringify(request.query);
   html += "</ul>";
   html += "</body></html>";

   response.send(html); 

    
});

// This route will help us see how query parameters are passed in:
// We'll use JSON.stringify to convert a JS object into a string that we can display in our HTML
app.get('/queries', function(request, response){
    // JSON.stringify will help us convert a Javascript Object to a JSON text string
    var queriesAsString = JSON.stringify(request.query);
    response
response.send("");
});


// This is how you start the server
// We've already seen just "app.listen(3000)"
// Here we see that you can also pass in a callback to be called when the server is started
app.listen(3000, function() {
    var msg = "====== LISTENING ======";
    console.log(msg);
}); 
