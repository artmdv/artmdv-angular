"use strict";

angular.module( 'buras' )
    .directive( 'siteNavigation', siteNavigationDirective );

function siteNavigationDirective () {
    return {
        templateUrl: 'js/app/buras/navigation/navigation.html',
        replace: true
    };
}
