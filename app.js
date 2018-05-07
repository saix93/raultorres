'use strict';
var http	      = require('http');
var express 		= require('express');
var app 		    = express();

var webServer = http.createServer(app).listen(80);

function start() {
  app.use('/', express.static('public'));
}

start();