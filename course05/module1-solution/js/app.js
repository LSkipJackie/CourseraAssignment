/**
 * Created by songlian on 22/01/2017.
 */

(function () {
    var app = angular.module("LunchCheck", []);

    app.controller("LunchCheckController", ["$scope", function ($scope) {
        $scope.buttonClick = function () {
            var input = $scope.inputValue;
            if (undefined == input || 0 == input.length) {
                $scope.message = 'Please enter data first';
                return;
            }
            var num = input.split(',').length;
            if (num <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        }
    }]);
})();