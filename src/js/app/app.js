"use strict";

angular.module('buras', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'js/app/buras/buras.html',
            controller: 'mainCtrl'
        })
        .when('/next', {
            templateUrl: 'js/app/buras/next.html',
            controller: 'mainCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
});
