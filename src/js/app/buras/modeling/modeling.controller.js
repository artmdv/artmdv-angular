"use strict";

angular.module('buras')
    .controller('modelingController', modelingController);

function modelingController($scope, apiService) {
    var vm = $scope;
    vm.images = apiService.get("v2/Images?tag=modeling", function(data){vm.images = data; });
}
