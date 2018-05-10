'use strict';
const http	      = require('http');
const express 		= require('express');
const app 		    = express();
const path        = require('path')

const port = 8080;

var webServer = http.createServer(app).listen(port);

function start() {
  app.use(express.static(__dirname + '/public'));

  app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
  });
}

start();