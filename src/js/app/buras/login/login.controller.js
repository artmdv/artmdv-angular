"use strict";

angular.module('buras')
    .controller('loginController', loginController);

function loginController($scope, $auth) {
    $scope.authenticate = function(provider) {
        $auth.authenticate(provider);
    };
}
