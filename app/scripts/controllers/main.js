(function (){

	'use strict';

	function MainController(scope){
		scope.showNavbar = function(){
			console.log('asd');
		};
	}

	MainController.$inject = ['$scope'];

	angular.module('jesusdiazmeApp')
	  .controller('MainCtrl', MainController);
})();