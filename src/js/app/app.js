"use strict";

angular.module('buras', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'js/buras/buras.html',
                controller: 'mainController'
            })
            .when('/astrophotography', {
                templateUrl: 'js/buras/astrophotography/ap.html',
                controller: 'apController'
            })
            .when('/modeling', {
                templateUrl: 'js/buras/modeling/modeling.html',
                controller: 'modelingController'
            })
            .when('/about', {
                templateUrl: 'js/buras/about/about.html',
                controller: 'aboutController'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });
