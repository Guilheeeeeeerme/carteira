var clc = require('cli-color');

module.exports = function(){

	var self = this;

	// no self vira publico
	self.abrirEmpresa = abrirEmpresa;
	self.fecharEmpresa = fecharEmpresa;
	self.listarEmpresas = listarEmpresas;

	// no var, vira privado
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
		console.log( clc.yellow(empresas) );
	}
}