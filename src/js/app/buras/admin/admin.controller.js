"use strict";

angular.module('buras')
    .controller('adminController', adminController);

function adminController($scope, apiService, $sce) {
    var vm = $scope;
    vm.apiAddress = $sce.trustAsResourceUrl('http://[[API_CONNECTION_STRING]]/v2/Images');
    var responseData;

    var successCallback = function(data){
        vm.responseData = data;
    };

    var uploadImage = function(){
        apiService.post('v2/Images', model, successCallback);
    };

    var model = {
        file: "",
        title: "",
        description: "",
        tags: "",
        password: ""
    };

    vm.uploadImage = uploadImage;
    vm.model = model;
    vm.responseData = responseData;
}
