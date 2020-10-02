var http = require('http');
var URL = require('url');

var server = http.createServer(function(req, res) {

     var myURL = "https://github.com/ArnobMahmud/C-Programming/tree/master/C%20Programming%20Exercise";

     var myURLObject =  URL.parse(myURL, true);
     var myHostName = myURLObject.hostname;
     var myPathName = myURLObject.pathname;

     res.writeHead(200,{'Content-type': 'text/html'});
     res.write(myHostName, myPathName);
     res.end();    
})

server.listen(3020);
console.log("Server runned successfully");