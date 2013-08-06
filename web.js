#!/usr/bin/env node

var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var read1 = fs.readFileSync('index.html');

var read2 = read1.toString();

app.get('/', function(request, response) {
  response.send(read2);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
