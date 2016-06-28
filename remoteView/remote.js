angular.module('outOfOfficeApp').controller('remoteController', ['$scope', 'sharedProperties', function($scope, sharedProperties) {
    $scope.userInput = sharedProperties.getValue();
}]);