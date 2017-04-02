var pessoas = require('./pessoas.js');


// minhas funções
var dizOi = dizOi;
var queDiaEhHoje = queDiaEhHoje;
var soma = soma;

/* funções sem retorno */
function dizOi(){
	console.log('oi');
}

var retorno1 = dizOi();

/* funcções com retorno */

function queDiaEhHoje(){
	var hoje = new Date();
	return hoje;
}

var retorno2 = queDiaEhHoje();

/**
 * Função com parametros
 */

function soma(a, b){
	return a + b;
}

var retorno3 = soma(10, 30);

console.log(retorno1, retorno2, retorno3);

/*for (var i in pessoas){
	var pessoa = pessoas[i];
}*/

function buscarLista(callback){
	// vai no banco de dados e demora 2 segundos
	setTimeout(function(){
		var lista = [1,2,3,4,5, Math.random()];
		callback(lista);
	}, 5000);
}


function clickNoBotao(){
	console.log('mandei buscar no banco');
	buscarLista(colocaListaNaTela);
	console.log('to esperando...');
}

/** callbacks, será chamada quando o dado chegar do banco */
function colocaListaNaTela(lista){
	console.log(lista);
}

clickNoBotao();