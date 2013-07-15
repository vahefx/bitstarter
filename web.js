var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('buffer.write('fs.readFileSync('/home/ubuntu/hw/hw3/part1/bitstarter/index.html')')');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
