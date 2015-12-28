(function(){

	'use strict';

	function SkillsCtrl(scope){

		scope.skills = [
			{
				name: 'HTML5',
				percent: '100%',
				background: 'blue'
			},
			{
				name: 'Javascript',
				percent: '50%',
				background: 'red'
			}
		];
	}

	SkillsCtrl.$inject = [
		'$scope'
	];

	angular.module('jesusdiaz')
	  .controller('SkillsCtrl', SkillsCtrl);
})();