(function(){

    'use strict';

    function HorizontalBarController(scope, translate){

    	scope.changeLanguage = function(langKey){
    		translate.use(langKey);
    	}
    }

    function HorizontalBar(){
        return {
            restrict: 'E',
            templateUrl: 'views/navbar.html',
            controller: HorizontalBarController
        };
    }

    HorizontalBarController.$inject = [
    	'$scope',
    	'$translate'
    ];

    angular.module('jesusdiaz.directives.jsNavbar', [])
        .directive('jsNavbar', HorizontalBar);
})();
