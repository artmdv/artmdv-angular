"use strict";

angular.module('buras')
    .filter('nice', niceFilter);

function niceFilter() {
    return function(text) {
        return text.match(/[A-Z][a-z]+/g).join(' ');
    };
}
