"use strict";

angular.module('buras')
    .controller('apController', apController);

function apController($scope, apiService) {
    var vm = $scope;
    vm.apList = apiService.listModel;
    vm.errors = apiService.errors;

    vm.init = function(){
        apiService.getAll();
    };
    vm.init();
}
