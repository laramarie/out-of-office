angular.module('outOfOfficeApp')
    .service('sharedProperties', function () {

    var userInput = {};

    return {
        setValue: function (input) {
            userInput = input;
        },
        getValue: function () {
            return userInput;
        }
    }
});