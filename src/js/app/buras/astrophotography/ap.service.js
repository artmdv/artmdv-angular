"use strict";

angular.module('buras').
    service('apiService', apiService);

function apiService($resource){
    var images = $resource('http://[[API_CONNECTION_STRING]]/Astrophotography').query();

    return {
        images: images
    };
}
