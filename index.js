// Write your solution in this file!
var customerName = "bob";
var bestCustomer;
const leastFavoriteCustomer = 0;

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
};

function setBestCustomer(){
    bestCustomer = "not bob";
    return bestCustomer;
};

function overwriteBestCustomer(){
    bestCustomer = "maybe bob"
    return bestCustomer;
};

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 1;
    return leastFavoriteCustomer;
};