angular.module('outOfOfficeApp').controller('notAtOfficeController', ['$scope', 'sharedProperties', function($scope, sharedProperties) {
    $scope.userInput = sharedProperties.getValue();
}]);