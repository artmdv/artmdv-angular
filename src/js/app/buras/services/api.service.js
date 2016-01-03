"use strict";

angular.module('buras').
    factory('apiService', apiService);

function apiService($resource){
    var apList = function(){
        return get('Astrophotos');
    };

    var model = function(uid){
        return get('Model/' + uid);
    };

    var modelList = function(){
        return get('Models');
    };

    function get(string)
    {
        return $resource('http://[[API_CONNECTION_STRING]]/' + string).query();
    }

    return {
        apList: apList,
        model: model,
        modelList: modelList
    };
}
