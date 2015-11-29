"use strict";

angular.module('buras').
    service('apiService', apiService);

function apiService($resource){
    var images = $resource('http://localhost:5004/Astrophotography').query();

    return {
        images: images
    };
}
