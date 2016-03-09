"use strict";

angular.module('buras', ['ngRoute', 'templates', 'ngResource', 'ngFileUpload'])
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
            .when('/imageDetails/:id', {
                templateUrl: 'js/buras/imageDetails/imageDetails.html',
                controller: 'imageDetailsController'
            })
            .when('/about', {
                templateUrl: 'js/buras/about/about.html',
                controller: 'aboutController'
            })
            .when('/admin', {
                templateUrl: 'js/buras/admin/admin.html',
                controller: 'adminController'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });
