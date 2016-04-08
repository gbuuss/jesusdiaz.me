(function() {

    'use strict';

    /**
     * @param {[type]}
     * @param {[type]}
     * @param {[type]}
     */
    function HorizontalBarController(scope, rootScope, translate) {

        scope.changeLanguage = function(langKey) {
            translate.use(langKey);
        }

        rootScope.$on('$translateChangeSuccess', function(event, data) {
            var language = data.language;
            rootScope.lang = language;
        });
    }

    /**
     * 
     */
    function HorizontalBar() {
        return {
            restrict: 'E',
            templateUrl: 'views/navbar.html',
            controller: HorizontalBarController
        };
    }

    HorizontalBarController.$inject = [
        '$scope',
        '$rootScope',
        '$translate'
    ];

    angular.module('jesusdiaz.directives.jsNavbar', [])
        .directive('jsNavbar', HorizontalBar);
})();