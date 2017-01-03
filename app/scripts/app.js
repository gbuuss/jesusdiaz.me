(function () {

    'use strict';

    /**
     * @param {[type]}
     */
    function Config(translateProvider) {
        translateProvider
            .useStaticFilesLoader({
                prefix: 'translations/locale-',
                suffix: '.json'
            })
            .preferredLanguage('en')
            .useMissingTranslationHandlerLog();
    }

    /**
     * @param {[type]}
     */
    function Run(rootScope) {
        rootScope.lang = 'en';
    }

    Config.$inject = [
        '$translateProvider'
    ];

    Run.$inject = [
        '$rootScope'
    ];

    angular.module('jesusdiaz', [
        'smoothScroll',
        'pascalprecht.translate',
        'jesusdiaz.directives.jsCharts',
        'jesusdiaz.directives.jsNavbar'
    ])
        .run(Run)
        .config(Config);

})();