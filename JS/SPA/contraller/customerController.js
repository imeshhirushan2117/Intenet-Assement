/*===============Customer party===============*/
generateCusId();
/*customerAdd*/
$("#btnCustomerAdd").click(function () {
    let customerId = $("#txtCusID").val();
    let customerName = $("#txtCusName").val();
    let customerAddress = $("#txtCusAddress").val();
    let customerTelNumber = $("#txtCusTP").val();


    var customerOB = new CustomerDTO(customerId, customerName, customerAddress, customerTelNumber);

    customerDB.push(customerOB);
    clearFileld();
    addCustomerData();
    generateCusId();
    loadAllCustomerIds();
});

function bindCustomerRow(){
    $("#tbodyCustomer>tr").click(function () {
        let customerId = $(this).children(":eq(0)").text();
        let customerName = $(this).children(":eq(1)").text();
        let customerAddress = $(this).children(":eq(2)").text();
        let customerTelNumber = $(this).children(":eq(3)").text();

        $("#txtCusID").val(customerId);
        $("#txtCusName").val(customerName);
        $("#txtCusAddress").val(customerAddress);
        $("#txtCusTP").val(customerTelNumber);
    });
}

/*lode table*/
function addCustomerData() {
    $("#tbodyCustomer").empty();
    for (var i of customerDB) {
        let raw = `<tr><td>${i.getCustomerID()}</td><td>${i.getCustomerName()}</td><td>${i.getCustomerAddress()}</td><td>${i.getCustomerTelNumber()}</td></tr>`
        $("#tblCustomer").append(raw);
        bindCustomerRow();
        cusDelete();
    }
}

/*btnClear*/
$("#btnCustomerClear").click(function () {
    clearFileld();
});

function clearFileld() {
    $("#txtCusName,#txtCusAddress,#txtCusTP").val("");
}

/*textFeeldsForcasing*/
$("#txtCusID").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtCusName").focus();
    }
});
$("#txtCusName").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtCusAddress").focus();
    }
});
$("#txtCusAddress").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtCusTP").focus();
    }
});

/*customer Search*/
$("#btnCustomerSearch").click(function () {
    var searchID = $("#txtCustomerSearch").val();
    var response = serchCustomer(searchID);
    if (response) {
        $("#txtCusID").val(response.getCustomerID());
        $("#txtCusName").val(response.getCustomerName());
        $("#txtCusAddress").val(response.getCustomerAddress());
        $("#txtCusTP").val(response.getCustomerTelNumber());
    } else {
        alert("Invalid Customer Search");
        clearFileld();
    }
});

function serchCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCustomerID() == id) {
            return customerDB[i];
        }
    }
}

/*customer delete*/
function cusDelete(){
    $("#btnCustomerDelete").click(function () {
        let customerId = $("#txtCusID").val();
        for (let i =0;i<customerDB.length;i++){
            if (customerDB[i].getCustomerID()==customerId){
                customerDB.splice(i,1);
            }
        }
        addCustomerData();
        clearFileld();
        generateCusId();
    });
}

/*customer Update*/
$("#btnCustomerUpdate").click(function () {
    let customerId = $("#txtCusID").val();
    let customerName = $("#txtCusName").val();
    let customerAddress = $("#txtCusAddress").val();
    let customerTelNumber = $("#txtCusTP").val();

    for (var i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCustomerID()==customerId){
            customerDB[i].setCustomerName(customerName);
            customerDB[i].setCustomerAddress(customerAddress);
            customerDB[i].setCustomerTelNumber(customerTelNumber);
        }
    }
    addCustomerData();
    generateCusId();
});

/*Customer ID auto generate*/
function generateCusId() {
    let index = customerDB.length - 1;
    let id;
    let temp;
    if (index != -1) {
        id = customerDB[customerDB.length - 1].getCustomerID();
        temp = id.split("-")[1];
        temp++;
    }

    if (index == -1) {
        $("#txtCusID").val("C00-001");
    } else if (temp <= 9) {
        $("#txtCusID").val("C00-00" + temp);
    } else if (temp <= 99) {
        $("#txtCusID").val("C00-0" + temp);
    } else {
        $("#txtCusID").val("C00-" + temp);
    }
}
