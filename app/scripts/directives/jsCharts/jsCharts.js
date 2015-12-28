(function(){

    'use strict';

    /**
     * Show a full navbar with all options
     * from post, login, search, register
     * and account configuration.
     *
     * @return object
     */
    function HorizontalBar(){
        return {
            restrict: 'E',
            scope: {
              label: '=label',
              width: '=width',
              background: '=background'
            },
            templateUrl: 'scripts/directives/jsCharts/hz_bar.html',
        };
    }

    angular.module('jesusdiaz.directives.jsCharts', [])
        .directive('jsHorizontalBarChart', HorizontalBar);
})();
