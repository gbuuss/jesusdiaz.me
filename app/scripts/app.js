'use strict';

function Config(translateProvider){
	translateProvider
		.useStaticFilesLoader({
		    prefix: '/translations/locale-',
		    suffix: '.json'
		})
        .useLocalStorage()
        .preferredLanguage('en')
        .useMissingTranslationHandlerLog();
}

function Run(rootScope){
    rootScope.lang = 'en';
}

Config.$inject = [
    '$translateProvider'
];

Run.$inject = [
    '$rootScope'
];

/**
 * @ngdoc overview
 * @name jesusdiaz
 * @description
 * # jesusdiaz
 *
 * Main module of the application.
 */
angular
  .module('jesusdiaz', [
  	'ngFitText',
    'ngCookies',
  	'pascalprecht.translate',
  	'jesusdiaz.directives.jsCharts',
  	'jesusdiaz.directives.jsNavbar'
  ])
  .run(Run)
  .config(Config);
