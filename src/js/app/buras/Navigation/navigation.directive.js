"use strict";

angular.module( 'buras' )
    .directive( 'siteNavigation', siteNavigationDirective );

function siteNavigationDirective () {
    return {
        templateUrl: 'js/app/buras/Navigation/navigation.html',
        replace: true
    };
}
