(function(){

    'use strict';


    function HorizontalBar(){
        return {
            restrict: 'E',
            templateUrl: 'views/navbar.html',
        };
    }

    angular.module('jesusdiaz.directives.jsNavbar', [])
        .directive('jsNavbar', HorizontalBar);
})();
