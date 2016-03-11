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

    var updateImage = function(image){
        apiService.put('v2/Images', image, successCallback);
    };

    var successCallback = function(data){
        vm.responseData = data;
    };

    function init(params) {
        if (params && params.id && params.tag) {
            getImage(params.id);
            vm.tag = params.tag;
        }
    }

    init($routeParams);

    vm.updateImage = updateImage;
}
