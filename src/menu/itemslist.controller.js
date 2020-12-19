(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsListController', ItemsListController);

    ItemsListController.$inject = ['MenuDataService', 'items'];
    function ItemsListController(MenuDataService, items) {
        var itemslist = this;
        itemslist.items = items.data.menu_items;
        console.log('I', itemslist.items)
    }

})();
