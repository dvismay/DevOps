//Console.Log("Om SwamiHo");

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Om SwamiHo');
}).listen(8082);