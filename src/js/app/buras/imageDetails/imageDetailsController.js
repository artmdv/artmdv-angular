"use strict";

angular.module('buras')
    .controller('imageDetailsController', imageDetailsController);

function imageDetailsController($scope, $routeParams, apiService) {
    var vm = $scope;
    var getImage = function(id){
        vm.image = apiService.get('v2/Images/' + id, setImage);
    };

    var setImage = function(image){
        vm.image = image;
    };

    function init(params) {
        if (params && params.id) {
            getImage(params.id);
        }
    }

    init($routeParams);
}
