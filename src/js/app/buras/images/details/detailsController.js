"use strict";

angular.module('buras')
    .controller('detailsController', detailsController);

function detailsController($scope, $routeParams, apiService) {
    var vm = $scope;
    var getImage = function(id){
        vm.image = apiService.get('v2/Images/' + id, setImage);
    };

    var setImage = function(image){
        vm.image = image;
    };

    function init(params) {
        if (params && params.id && params.tag) {
            getImage(params.id);
            vm.tag = params.tag;
        }
    }

    init($routeParams);
}
