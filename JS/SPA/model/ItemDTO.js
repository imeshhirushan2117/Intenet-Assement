function ItemDTO(id, name, qty, price) {
    var itemID = id;
    var itemName = name;
    var itemQty = qty;
    var itemPrice = price;

    this.getItemID = function () {
        return itemID;
    }
    this.setItemID = function (id) {
        itemID = id;
    }
    this.getItemName = function () {
        return itemName;
    }
    this.setItemName= function (name) {
        itemName = name;
    }
    this.getItemQty = function () {
        return itemQty;
    }
    this.setItemQty = function (qty) {
        itemQty = qty;
    }
    this.getItemPrice= function () {
        return itemPrice;
    }
    this.setItemPrice = function (price) {
        itemPrice = price;
    }
}