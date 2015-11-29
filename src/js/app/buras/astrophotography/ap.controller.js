"use strict";

angular.module('buras')
    .controller('apController', apController);

function apController($scope, apiService) {
    var vm = $scope;
    vm.images = apiService.images;
}
