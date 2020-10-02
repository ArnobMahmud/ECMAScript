/*
    Author : Arnob Mahmud

    Mail : arnob.tech.me@gmail.com
*/
var http = require('http');

var server = http.createServer(function(req, res){
    res.end("Hello World");  // response
});

server.listen(3000);    // port number madecls
console.log("Server successfully runned");