var express = require('express');

var app = express.createServer(express.logger());

var reading = fs.readFileSync("index.html");

var reading2 = reading.toString();

app.get('/', function(request, response) {
  response.send(reading2);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
