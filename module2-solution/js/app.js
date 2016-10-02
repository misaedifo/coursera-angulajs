(function () {
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingService);


    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController (ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getItems();
        toBuy.boughtItem = function (index,item) {
            ShoppingListCheckOffService.boughtItem(item);
            ShoppingListCheckOffService.removeToBuyItem(index);
        };
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
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
                quantity: '3'
            },
            {
                name: 'Chips',
                quantity: '6'
            },
            {
                name: 'Potatoe',
                quantity: '20'
            },
            {
                name: 'Pesto bismol',
                quantity: '3'
            },
            {
                name: 'Apple',
                quantity: '15'
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