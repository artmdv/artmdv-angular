"use strict";

angular.module('buras')
    .controller('apController', apController);

function apController($scope, apiService) {
    var vm = $scope;
    apiService.get("v2/Images?tag=astrophotography", function(data){vm.images = data; });
}
