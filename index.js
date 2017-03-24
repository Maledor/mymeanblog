var express = require('express');
var server = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var userRouter = require('./routers/user.router');
var postRouter = require('./routers/post.router');

var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./secrets').MONGOURI;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));
server.use(express.static(__dirname + '/public'));

server.get('/', function(request, response){
  response.sendFile('index.html', {root: __dirname + '/public/html'});
});

mongoose.connect(mongoURI);

server.use(userRouter);
server.use(postRouter);

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
