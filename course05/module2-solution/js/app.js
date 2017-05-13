/**
 * Created by songlian on 13/05/2017.
 */

(function () {
    var app = angular.module("ShoppingListCheckOff", []);

    var ShoppingListCheckOffService = function () {
        this.toBuy = [{ name: "cookies", quantity: 2 }, { name: "cookies", quantity: 3 }, { name: "cookies", quantity: 4 },
            { name: "cookies", quantity: 5 }, { name: "cookies", quantity: 6 }];
        this.bought = [];

        this.getToBuy = function () {
            return this.toBuy
        };

        this.getBought = function () {
            return this.bought
        };
        
        this.buy = function (index) {
            this.bought.push(this.toBuy.splice(index, 1)[0]);
        }
    };
    app.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    // ShoppingListCheckOffService.$inject = [];

    var ToBuyController = function ($scope, ShoppingListCheckOffService) {

        $scope.getItems = function () {
            return ShoppingListCheckOffService.getToBuy();
        };

        $scope.buy = function (index) {
            ShoppingListCheckOffService.buy(index);
        }
    };
    ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    app.controller("ToBuyController", ToBuyController);

    var AlreadyBoughtController = function ($scope, ShoppingListCheckOffService) {

        $scope.getItems = function () {
            return ShoppingListCheckOffService.getBought();
        }
    };
    app.controller("AlreadyBoughtController", AlreadyBoughtController);
    AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
})();