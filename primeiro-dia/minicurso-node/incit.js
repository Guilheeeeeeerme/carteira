module.exports.abrirEmpresa = abrirEmpresa;
module.exports.fecharEmpresa = fecharEmpresa;
module.exports.listarEmpresas = listarEmpresas;

var clc = require('cli-color');
var empresas = [];

function abrirEmpresa(empresa) {
	console.log( clc.blue('Abrindo uma empresa') );
	console.log( clc.blue(empresa) );
	empresas.push(empresa);
}

function fecharEmpresa(empresa){
	console.log( clc.red('fechando uma empresa') );
	console.log( clc.red(empresa) );

	for(var i in empresas){
		if(empresas[i] == empresa){
			empresas.splice(i, 1)
			break;
		}
	}
}

function listarEmpresas(){
	return empresas;
}