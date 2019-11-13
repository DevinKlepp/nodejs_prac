var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, res);
  var filename = "." + q.pathname; // "./path/object"
  fs.readFile(filename, function (err, data) {
    //console.log(data);
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("404 Not Found oof");
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}).listen(8080);
// Next, make an email system using nodejs
