angular.module('outOfOfficeApp').controller('vacationController', ['$scope', 'sharedProperties', function ($scope, sharedProperties) {
    $scope.userInput = sharedProperties.getValue();
    
    /* convert contacts array to string
       form: Name (email), name (email) or name (email) according to number of contacts */
    $scope.contactList = function () {
        var list = $scope.userInput.contacts[0].name + " (" + $scope.userInput.contacts[0].email + ")";
        
        for (var i = 1; i < $scope.userInput.contacts.length; i++) {
            if (i === $scope.userInput.contacts.length - 1) {
            list = list + " or " + $scope.userInput.contacts[$scope.userInput.contacts.length - 1].name + " (" + $scope.userInput.contacts[i].email + ")";
            } else {
                list = list + ", " + $scope.userInput.contacts[i].name + " (" + $scope.userInput.contacts[i].email + ")";
            }
        };
        
        return list;
    };
}]);