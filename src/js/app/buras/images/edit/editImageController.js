"use strict";

angular.module('buras')
    .controller('editImageController', editImageController);

function editImageController($scope, $routeParams, apiService) {
    var vm = $scope;
    var getImage = function(id){
        vm.image = apiService.get('v2/Images/' + id, setImage);
    };

    var setImage = function(image){
        vm.image = image;
    };

    var updateImage = function(){
        if (!(vm.image.image.tags instanceof Array)) {
            vm.image.image.tags = vm.image.image.tags.split(",");
        }

        apiService.put('v2/Images', {"image": vm.image.image, "password": vm.password}, successCallback);
    };

    var deleteImage = function(){
        apiService.delete('v2/Images/' + vm.image.image.id + '/' + vm.password, null, deleteCallback);
    };

    var deleteCallback = function(data){

    };

    var successCallback = function(data){
        vm.image.Image = data;
    };

    function init(params) {
        if (params && params.id && params.tag) {
            getImage(params.id);
            vm.tag = params.tag;
        }
    }

    init($routeParams);

    vm.updateImage = updateImage;
    vm.deleteImage = deleteImage;
}
