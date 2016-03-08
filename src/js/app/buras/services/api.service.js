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
        }
        //    , function (response) {
        //    if (response.status > 0)
        //        $scope.errorMsg = response.status + ': ' + response.data;
        //}
        );
    };

    return {
        apList: apList,
        model: model,
        modelList: modelList,
        post: post,
        get: get
    };
}
