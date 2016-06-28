angular.module('outOfOfficeApp')
    .controller('inputController', ['$scope', 'sharedProperties', '$filter', 
                                    function ($scope, sharedProperties, $filter) {
    /* object for userInput, will be saved in sharedProperties Service */               
    $scope.userInput = {};
    $scope.userInput.name = '';
    $scope.userInput.absenceType = '';
    $scope.userInput.startDate = new Date();
    $scope.userInput.endDate = new Date();
    $scope.userInput.endDate.setDate($scope.userInput.endDate.getDate() + 7);
    $scope.userInput.office = '';
    $scope.userInput.remoteOffice = '';
    $scope.userInput.contacts = [];
    $scope.userInput.contacts.push({name : '', email : ''});
    
    /* add new empty contact to array */
    $scope.addContact = function () {
        $scope.userInput.contacts.push({name : '', email : ''});
    };
                    
    $scope.removeContact = function () {
        $scope.userInput.contacts.pop();
    };
    
    /* save userInput object to service */
    $scope.notify = function () {
        sharedProperties.setValue($scope.userInput);
    };
                                        
    $scope.getPath = function () {
        switch ($scope.userInput.absenceType) {
            case 'vacation':
                return '#/vacation';
            case 'remote work':
                return '#/remote';
            case 'not at office':
                return '#/notAtOffice';
        }
    }
}]);
