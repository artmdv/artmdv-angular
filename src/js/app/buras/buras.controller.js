"use strict";

angular.module('buras')
    .controller('mainController', mainController);

function mainController($scope, apiService) {
    var vm = $scope;
    var getFeaturedImage = function(){
        vm.featuredImage = apiService.get('v2/Images/Featured', setFeaturedImage);
    };

    function setImage(image){
        vm.image = image;
    }

    function setFeaturedImage(image){
        vm.featuredImage = image;
        vm.image = apiService.get('v2/Images/' + vm.featuredImage.imageId, setImage);
    }

    function init() {
        getFeaturedImage();
    }

    init();
}
