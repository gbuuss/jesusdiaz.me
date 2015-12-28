(function (){

	'use strict';

	function MainCtrl(scope){
		scope.showNavbar = function(){
			
		};
	}

	MainCtrl.$inject = ['$scope'];

	angular.module('jesusdiaz')
	  .controller('MainCtrl', MainCtrl);
})();