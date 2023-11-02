// Create a webserver 
// 1. create a webserver
// 2. create a route for the webserver
// 3. create a request handler for the route
// 4. create a response for the request handler
// 5. start the server
// 6. open the browser and type localhost:3000
// 7. stop the server by pressing ctrl + c

var http = require('http');
var fs = require('fs');

// create a server
var server = http.createServer();

// create a route
server.on('request', function(req, res) {
    console.log('request received');
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', function(err, data) {
        if (err) throw err;
        res.end(data);
    });
});

// start the server
server.listen(3000, function() {
    console.log('server started at port 3000');
});