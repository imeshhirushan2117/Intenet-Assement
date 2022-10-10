function OrderDetailDTO(orderId, itemId, itemName, unitPrice, orderQty, total) {
    var __oId = orderId;
    var __itemId = itemId;
    var __itemName = itemName;
    var __itemUnitPrice = unitPrice;
    var __qty = orderQty;
    var __total = total;

    this.setOrderid = function (orderId) {
        __oId = orderId;
    }
    this.getOrderid = function () {
        return __oId;
    }
    this.setItemCode = function (itemCode) {
        __itemId = itemCode;
    }
    this.getItemCode = function () {
        return __itemId;
    }
    this.setItemName = function (itemName) {
        __itemName = itemName;
    }
    this.getItemName = function () {
        return __itemName;
    }
    this.setItemUnitPrice = function (unitPrice) {
        __itemUnitPrice = unitPrice;
    }
    this.getItemUnitPrice = function () {
        return __itemUnitPrice;
    }
    this.setItemQty = function (orderQty) {
        __qty = orderQty;
    }
    this.getItemQty = function () {
        return __qty;
    }
    this.setTotAmount = function (totAmount) {
        __total = totAmount;
    }
    this.getTotAmount = function () {
        return __total;
    }
}