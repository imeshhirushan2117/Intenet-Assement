//"Hidden item & order File"
document.getElementById("order").style.setProperty("Display","none","important");
document.getElementById("item").style.setProperty("Display","none","important");

/*click Event NavBar Customer*/
document.getElementById("clickCustomer").addEventListener("click",function (){
    document.getElementById("customer").style.setProperty("Display","block","important");
    document.getElementById("item").style.setProperty("Display","none","important");
    document.getElementById("order").style.setProperty("Display","none","important");
});
/*click Event NavBar Item*/
document.getElementById("clickItem").addEventListener("click",function (){
    document.getElementById("item").style.setProperty("Display","block","important");
    document.getElementById("customer").style.setProperty("Display","none","important");
    document.getElementById("order").style.setProperty("Display","none","important");
});
/*click Event NavBar Order*/
document.getElementById("clickOrder").addEventListener("click",function (){
    document.getElementById("order").style.setProperty("Display","block","important");
    document.getElementById("customer").style.setProperty("Display","none","important");
    document.getElementById("item").style.setProperty("Display","none","important");
});