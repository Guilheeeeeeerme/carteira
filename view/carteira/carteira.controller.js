angular.module('app').controller('CarteiraController', controller);

function controller ($scope, $http) {
	var vm = this;

	$scope.contas = [];

	vm.actionClickSubmit = actionClickSubmit;
	vm.actionClickEdit = actionClickEdit;
	vm.actionClickRemove = actionClickRemove;

	resetFormConta();

	function resetFormConta () {
    	var now = new Date();

		$scope.formConta = {
			relevancia: 3,
			tipo: 'despesa',
			data: now,
			time: now
		};
	}

	function actionClickSubmit (conta) {
		adicionarNaLista(conta);
    	$http.post('./api/conta', conta);
		resetFormConta();
	}

	function actionClickEdit (conta) {
    	$http.put('./api/conta', conta);
		$scope.formConta = conta;
	}

	function actionClickRemove (conta, indice) {
    	$http.delete('./api/conta', conta);
		$scope.contas.splice(indice, 1);
	}

	function adicionarNaLista (conta) {
		$scope.contas.push(conta);
	}
}
