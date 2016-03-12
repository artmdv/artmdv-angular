"use strict";

angular.module('buras').
    factory('apiService', apiService);

function apiService($http, Upload, $timeout){
    var baseAddres = 'http://[[API_CONNECTION_STRING]]/';

    var apList = function(){
        return get('Astrophotos');
    };

    var model = function(uid){
        return get('Model/' + uid);
    };

    var modelList = function(){
        return get('Models');
    };

    function get(endpoint, success)
    {
        $http.get(baseAddres + endpoint).then(function(response){success(response.data); });
    }

    var post = function(endpoint, dto, success)
    {
        var upload = Upload.upload({
            url: baseAddres + endpoint,
            data: dto
        });

        upload.then(function (response) {
            $timeout(function () {
                success(response.data);
            });
        });
    };

    var put = function(endpoint, dto, success){
        $http.put(baseAddres + endpoint, dto).then(function(response){success(response.data); });
    };

    var del = function(endpoint, dto, success){
        $http.delete(baseAddres + endpoint, dto).then(function(response){success(response.data); });
    };

    return {
        apList: apList,
        model: model,
        modelList: modelList,
        post: post,
        get: get,
        put: put,
        delete: del
    };
}
