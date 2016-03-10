"use strict";

angular.module('buras', ['ngRoute', 'templates', 'ngResource', 'ngFileUpload'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'js/buras/buras.html',
                controller: 'mainController'
            })
            .when('/images/:tag', {
                templateUrl: 'js/buras/images/images.html',
                controller: 'imagesController'
            })
            .when('/images/:tag/:id', {
                templateUrl: 'js/buras/images/details/details.html',
                controller: 'detailsController'
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
