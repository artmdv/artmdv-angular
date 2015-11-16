"use strict";
angular.module('buras')
    .directive('myName', myNameDirective);

function myNameDirective () {
    return {
        restrict: 'E',
        template: 'Hi name is <strong>{{main.name}}</strong>'
    };
}
