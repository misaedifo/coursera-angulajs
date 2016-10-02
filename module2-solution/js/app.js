(function () {
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyListController', ToBuyListController)
        .controller('BoughtListController', BoughtListController)
        .service('ShoppingListCheckOffService', ShoppingService);


    ToBuyListController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyListController(ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getItems();
        toBuy.boughtItem = function (index,item) {
            ShoppingListCheckOffService.boughtItem(item);
            ShoppingListCheckOffService.removeToBuyItem(index);
        };
    };

    ToBuyListController.$inject = ['ShoppingListCheckOffService'];
    function BoughtListController(ShoppingListCheckOffService) {
        var boughtList = this;
        boughtList.boughtItems = ShoppingListCheckOffService.getBoughtItems();
    };

    function ShoppingService() {
        var service = this;
        var itemsBought = [];

        //list of items.
        var itemsToBuy = [
            {
                name: 'Cookies',
                quantity: '3 bags'
            },
            {
                name: 'Chips',
                quantity: '6 bags'
            },
            {
                name: 'Potatoe',
                quantity: '20 pouns'
            },
            {
                name: 'Pesto bismol',
                quantity: '3 bottles'
            },
            {
                name: 'Apple',
                quantity: '15 units'
            }
        ];

        service.getItems = function () {
            return itemsToBuy;
        };

        service.boughtItem = function (item) {
            var item = {
                name: item.name,
                quantity: item.quantity
            };
            itemsBought.push(item);
        }

        service.getBoughtItems = function () {
            return itemsBought;
        }

        service.removeToBuyItem = function (index) {
            itemsToBuy.splice(index, 1);
        }
    }


})();