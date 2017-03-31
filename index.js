var express = require('express');
var server = express();

server.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

server.use('/bower_components', express.static('bower_components'));
server.use('/', express.static('view'));

var contasAPI = new require('./server/contas-api.js')(server);

server.listen(3000, function () {
	console.log('Example server listening on port 3000!');
});