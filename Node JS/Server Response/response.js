/*
    Author : Arnob Mahmud

    Mail : arnob.tech.me@gmail.com
*/
var http = require('http');

var server = http.createServer(function(req, res){
    
        if (res.url == "/") {
            res.writeHead(200,{'Content-type': 'text/html'})
            res.write('<h1>This is Home Page</h1>')
            res.end()

        } else if(res.url == "/about"){
            res.writeHead(200,{'Content-type': 'about/html'})
            res.write('<h1>This is About Page</h1>')
            res.end()

        } else if(res.url == "/contact") {
            res.writeHead(200,{'Content-type': 'contact/html'})
            res.write('<h1>This is Contact Page</h1>')
            res.end()
        }

});

server.listen(3030);
console.log("Server Runned Successfully");