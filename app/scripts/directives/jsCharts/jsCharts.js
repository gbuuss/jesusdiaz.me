(function() {

    'use strict';

    /**
     * 
     */
    function HorizontalBar() {
        return {
            restrict: 'E',
            scope: {
                label: '=label',
                width: '=width',
                background: '=background'
            },
            templateUrl: 'views/horizontal_bar.html',
        };
    }

    angular.module('jesusdiaz.directives.jsCharts', [])
        .directive('jsHorizontalBarChart', HorizontalBar);
})();