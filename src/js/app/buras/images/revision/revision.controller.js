"use strict";

angular.module('buras')
    .controller('revisionImageController', revisionImageController);

function revisionImageController($scope, $routeParams, apiService) {
    var vm = $scope;
    var getImage = function(id){
        vm.image = apiService.get('v2/Images/' + id, setImage);
    };

    var setImage = function(image){
        vm.image = image;
    };

    var updateImage = function(){
        if (!(vm.image.image.tags instanceof Array)) {
            vm.image.image.tags = vm.image.image.tags.split(",");
        }
        model.imageId = vm.image.image.id;
        apiService.post('v2/Images/Revision', model, successCallback);
    };

    var deleteRevision = function(){
        apiService.delete('v2/Images/Revision/' + vm.image.image.id + '/' + vm.password, null, deleteCallback);
    };

    var deleteCallback = function(data){

    };

    var successCallback = function(data){
        vm.image.Image = data;
    };

    function init(params) {
        if (params && params.id && params.tag) {
            getImage(params.id);
            vm.tag = params.tag;
        }
    }

    init($routeParams);

    vm.updateImage = updateImage;
    vm.deleteRevision = deleteRevision;
    var model = {
        file: "",
        imageId: "",
        description: "",
        password: ""
    };

    vm.model = model;
}
