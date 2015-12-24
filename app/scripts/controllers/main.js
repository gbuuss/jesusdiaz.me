(function (){

	'use strict';

	function MainCtrl(scope){
		scope.showNavbar = function(){
			console.log('asd');
		};
	}

	MainCtrl.$inject = ['$scope'];

	angular.module('jesusdiazmeApp')
	  .controller('MainCtrl', MainCtrl);
})();