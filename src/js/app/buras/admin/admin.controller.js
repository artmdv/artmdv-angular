"use strict";

angular.module('buras')
    .controller('adminController', adminController);

function adminController($scope, apiService, $sce) {
    var vm = $scope;
    vm.apiAddress = $sce.trustAsResourceUrl('http://[[API_CONNECTION_STRING]]/v2/Images');

    var successCallback = function(data){
        vm.uploadStatus = "Success";
        vm.responseData = data;
    };

    var errorCallback = function(data){
        vm.uploadStatus = "Error";
    };

    var uploadImage = function(){
        vm.uploadStatus = "Uploading..";
        apiService.post('v2/Images', model, successCallback, errorCallback);
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
        tags: today,
        annotation: "",
        inverted: "",
        password: "",
        date: today
    };

    vm.paste = function (event) {
        var clipData = event.clipboardData;
        angular.forEach(clipData.items, function (item, key) {
            if (clipData.items[key].type.match(/image.*/)) {
                var img = clipData.items[key].getAsFile();
                model.file = img;
                uploadImage();
            }
        });
    };

    vm.uploadImage = uploadImage;
    vm.model = model;
}
