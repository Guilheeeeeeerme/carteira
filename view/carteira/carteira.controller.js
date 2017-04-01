'use strict';

angular.module('app').controller('CarteiraController', controller);

controller.$inject = ['$scope'];

function controller ($scope) {
	var vm = this;

	vm.actionClickSubmit = actionClickSubmit;
	vm.actionClickEdit = actionClickEdit;
	vm.actionClickRemove = actionClickRemove;

	loadListOfItems();
	
	function loadListOfItems() {

		$scope.items = [];
		
		cleanForm();
	}

	function cleanForm () {
		var now = new Date();

		$scope.formConta = {
			relevancia: 2,
			tipo: 'despesa',
			data: now,
			time: now
		};
	}

	function actionClickSubmit (item) {
		$scope.items.push(item);

        /**
		 * CRIAR ID CASO ESTEJA ADICIONANDO UM VALOR NOVO
		 * OU,
		 * ATUALIZAR NA LISTA CASO JA EXISTA
         */

		cleanForm();
	}

	function actionClickEdit (item) {
        /**
		 * PASSANDO O VALOR DA LISTA PARA O FORMULÁRIO
         */
		$scope.formConta = angular.copy(item);
	}

	function actionClickRemove (item, indice) {
        /**
		 * remover pelo indice
         */
	}
}
