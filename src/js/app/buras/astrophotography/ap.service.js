"use strict";

angular.module('buras').
    service('apiService', apiService);

function apiService($http){
    var listModel = {
        model: {
            images: [],
            count: 0
        }
    };

    var errors = "no errors";

    function handleSuccess(response){

        listModel.model = response;
    }

    function handleError(reason){
        errors = reason;
    }

    var getAll = function(){
        debugger;
        return $http.get('http://localhost:5004/Astrophotography')
            .success(handleSuccess)
            .catch(handleError);
    };

    return {
        getAll: getAll,
        listModel: listModel,
        errors: errors
    };
}
