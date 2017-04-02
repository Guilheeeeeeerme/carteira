var express = require('express');
var app = express();

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

// torna um pasta publicamente acessivel
// primeiro argumento: caminho depois do dominio
// segundo argumento: caminho depois desse arquivo
app.use('/login', express.static('./view'))

app.use('/bower_components', express.static('./bower_components'))
app.use('/', express.static('./exemplo'))

// criando um rota estatica
app.get('/chega-por-hoje', function(req, res){
	setTimeout(function(){
		res.send('sim');
	}, 10000)
});

app.listen(3000);
console.log('Server is running on port 3000');