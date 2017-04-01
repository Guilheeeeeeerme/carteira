'use strict';

angular.module('app').controller('AppController', controller);

controller.$inject = ['$scope', '$http'];

function controller ($scope, $http) {

	var vm = this;

	$scope.showCarteira = true;

	$scope.saldo = '???';
}
