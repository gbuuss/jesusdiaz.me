(function(){

    'use strict';


    function HorizontalBar(){
        return {
            restrict: 'E',
            templateUrl: 'scripts/directives/jsNavbar/navbar.html',
        };
    }

    angular.module('jesusdiaz.directives.jsNavbar', [])
        .directive('jsNavbar', HorizontalBar);
})();
