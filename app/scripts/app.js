(function() {

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
            .useLocalStorage()
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
            'ngFitText',
            'ngCookies',
            'pascalprecht.translate',
            'jesusdiaz.directives.jsCharts',
            'jesusdiaz.directives.jsNavbar'
        ])
        .run(Run)
        .config(Config);

})();