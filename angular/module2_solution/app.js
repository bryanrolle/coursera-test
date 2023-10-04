(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var Buy = this;
        Buy.items = ShoppingListCheckOffService.getToBuyItems();

        Buy.buyItem = function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService){
        var Bought = this;

        Bought.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService(){
        var service = this;
        var toBuy = [
            { itemName: "cookies", itemQuantity: "10 boxes" },
            { itemName: "chips", itemQuantity: "3 large bags" },
            { itemName: "noodles", itemQuantity: "2 boxes" },
            { itemName: "vienna sausages", itemQuantity: "2 boxes" },
            { itemName: "hotdogs", itemQuantity: "2 bags" },
        ];

            var alreadyBoughtItems = [];

            service.buyItem=function(itemIndex){
                var item = toBuy[itemIndex];

                alreadyBoughtItems.push(item);
                toBuy.splice(itemIndex, 1);
            };

            service.getToBuyItems = function(){
                return toBuy;
            }

            service.getBoughtItems = function(){
                return alreadyBoughtItems;
            }
    }

})();