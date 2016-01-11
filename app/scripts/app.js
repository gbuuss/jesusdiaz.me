'use strict';

function Config(translateProvider){
	translateProvider
		.preferredLanguage('en')
		.useStaticFilesLoader({
		    prefix: '/translations/locale-',
		    suffix: '.json'
		  });
}

Config.$inject = ['$translateProvider'];
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
  	'pascalprecht.translate',
  	'jesusdiaz.directives.jsCharts',
  	'jesusdiaz.directives.jsNavbar'
  ])
  .config(Config);
