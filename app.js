angular.module('outOfOfficeApp', [
    'ngRoute'
])

.config(['$routeProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'start.html'
    })
    .when('/input', {
        templateUrl: 'inputView/input.html'
    })
    .when('/vacation', {
        templateUrl: 'vacationView/vacation.html'
    })
    .when('/remote', {
        templateUrl: 'remoteView/remote.html'
    })
    .when('/notAtOffice', {
        templateUrl: 'notAtOfficeView/notAtOffice.html'
    })
    .otherwise({
        redirectTo: 'start.html'
    });
}]);
