var app = angular.module('app',[]);

app.controller('AppController', AppController);

function AppController($scope, $http) {

	$scope.dados = {
		chegaPorHoje: 'nao'
	};

	$http.get('/chega-por-hoje').then(chegaPorHojeCallback);

	function chegaPorHojeCallback(response){
		$scope.dados.chegaPorHoje = response.data;
	}

}