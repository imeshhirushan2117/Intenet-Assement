function CustomerDTO(id, name, address, telNumber) {
    var customerID = id;
    var customerName = name;
    var customerAddress = address;
    var customerTelNumber = telNumber;

    this.getCustomerID = function () {
        return customerID;
    }
    this.setCustomerID = function (id) {
        customerID = id;
    }
    this.getCustomerName = function () {
        return customerName;
    }
    this.setCustomerName = function (name) {
        customerName = name;
    }
    this.getCustomerAddress = function () {
        return customerAddress;
    }
    this.setCustomerAddress = function (address) {
        customerAddress = address;
    }
    this.getCustomerTelNumber = function () {
        return customerTelNumber;
    }
    this.setCustomerTelNumber = function (telNumber) {
        customerTelNumber = telNumber;
    }
}