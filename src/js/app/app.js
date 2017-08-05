"use strict";

angular.module('buras', ['ngRoute', 'templates', 'ngResource', 'ngFileUpload', 'ngclipboard', 'ui.bootstrap', 'ngSanitize'])
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
            .when('/images/:tag/:id/edit', {
                templateUrl: 'js/buras/images/edit/editImage.html',
                controller: 'editImageController'
            })
            .when('/images/:tag/:id/revisions', {
                templateUrl: 'js/buras/images/revision/revision.html',
                controller: 'revisionImageController'
            })
            .when('/about', {
                templateUrl: 'js/buras/about/about.html',
                controller: 'aboutController'
            })
            .when('/admin', {
                templateUrl: 'js/buras/admin/admin.html',
                controller: 'adminController'
            })
            .when('/publications', {
                templateUrl: 'js/buras/publications/publications.html'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });
