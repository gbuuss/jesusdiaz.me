(function() {

    'use strict';

    /**
     * @param {[type]}
     */
    function HireMeCtrl(scope) {
        scope.date = new Date();
    }

    HireMeCtrl.$inject = ['$scope'];

    angular.module('jesusdiaz')
        .controller('HireMeCtrl', HireMeCtrl);
})();