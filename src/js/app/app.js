"use strict";

angular.module('buras', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'js/app/buras/buras.html',
                controller: 'mainController'
            })
            .when('/astrophotography', {
                templateUrl: 'js/app/buras/astrophotography/ap.html',
                controller: 'apController'
            })
            .when('/modeling', {
                templateUrl: 'js/app/buras/modeling/modeling.html',
                controller: 'modelingController'
            })
            .when('/about', {
                templateUrl: 'js/app/buras/about/about.html',
                controller: 'aboutController'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });
