(function(){

	'use strict';

	function SkillsCtrl(scope){

		scope.skills = [
			{
				name: 'HTML5/CSS3',
				percent: '100%',
				background: '#13B87C'
			},
			{
				name: 'Javascript',
				percent: '90%',
				background: '#13B87C'
			},
			{
				name: 'Python',
				percent: '70%',
				background: '#13B87C'
			},
			{
				name: 'MySQL',
				percent: '95%',
				background: '#13B87C'
			},
			{
				name: 'PHP',
				percent: '95%',
				background: '#13B87C'
			},
		];
	}

	SkillsCtrl.$inject = [
		'$scope'
	];

	angular.module('jesusdiaz')
	  .controller('SkillsCtrl', SkillsCtrl);
})();