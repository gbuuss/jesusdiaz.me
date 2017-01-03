(function () {

    'use strict';

    /**
     * @param {[type]}
     */
    function SkillsCtrl(scope) {

        scope.skills = [
            {
                name: 'HTML5/CSS3',
                percent: '100%',
                background: '#16A2A1'
            },
            {
                name: 'Javascript',
                percent: '100%',
                background: '#A4488B'
            },
            {
                name: 'Python',
                percent: '75%',
                background: '#A6C738'
            },
            {
                name: 'MySQL',
                percent: '100%',
                background: '#E23740'
            },
            {
                name: 'PHP',
                percent: '100%',
                background: '#FCB618'
            },
            {
                name: 'AngularJs',
                percent: '90%',
                background: '#16A2A1'
            }
        ];
    }

    SkillsCtrl.$inject = ['$scope'];

    angular.module('jesusdiaz')
        .controller('SkillsCtrl', SkillsCtrl);
})();