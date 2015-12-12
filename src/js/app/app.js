"use strict";

angular.module('buras', ['ngRoute', 'templates', 'ngResource', 'jkuri.gallery', 'satellizer'])
    .config(function ($routeProvider, $locationProvider, $authProvider) {
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

        $authProvider.facebook({
            clientId: '510836799098726'
        });

        $locationProvider.html5Mode(true);
    });
