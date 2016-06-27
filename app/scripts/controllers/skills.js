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
                background: '#E24923'
            }, {
                name: 'Javascript',
                percent: '90%',
                background: '#F0DB4E'
            }, {
                name: 'Python',
                percent: '75%',
                background: '#3773A5'
            }, {
                name: 'MySQL',
                percent: '100%',
                background: '#E48D00'
            }, {
                name: 'PHP',
                percent: '100%',
                background: '#617CBE'
            }
        ];
    }

    SkillsCtrl.$inject = ['$scope'];

    angular.module('jesusdiaz')
        .controller('SkillsCtrl', SkillsCtrl);
})();