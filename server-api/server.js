var http = require('http');
var greetings = require("./callable.js");

console.log(greetings.sayHelloInEnglish());

// "Hola" 
console.log(greetings.sayHelloInSpanish());
//create a server object:
http.createServer(function(req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080