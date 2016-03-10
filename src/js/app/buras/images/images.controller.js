"use strict";

angular.module('buras')
    .controller('imagesController', imagesController);

function imagesController($scope, apiService, $routeParams) {
    var vm = $scope;
    var loadImages = function(tag) {
        apiService.get("v2/Images?tag=" + tag, function (data) {
            vm.images = data;
        });
    };

    function init(params) {
        if (params && params.tag) {
            vm.tag = params.tag;
            loadImages(params.tag);
        }
    }

    init($routeParams);
}
