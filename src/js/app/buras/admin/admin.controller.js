"use strict";

angular.module('buras')
    .controller('adminController', adminController);

function adminController($scope, apiService, $sce) {
    var vm = $scope;
    vm.apiAddress = $sce.trustAsResourceUrl('http://[[API_CONNECTION_STRING]]/v2/Images');

    var successCallback = function(data){
        vm.responseData = data;
    };

    var uploadImage = function(){
        apiService.post('v2/Images', model, successCallback);
    };
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd < 10) {
        dd = '0' + dd;
    }

    if(mm < 10) {
        mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;

    var model = {
        file: "",
        title: "",
        description: "",
        tags: "",
        annotation: "",
        inverted: "",
        password: "",
        date: today
    };

    vm.uploadImage = uploadImage;
    vm.model = model;
}
