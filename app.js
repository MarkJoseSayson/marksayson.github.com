var product1 = document.getElementById("product1");
var qty1 = document.getElementById("qty1");
var price1 = document.getElementById("price1");

var product2 = document.getElementById("product2");
var qty2 = document.getElementById("qty2");
var price2 = document.getElementById("price2");

var product3 = document.getElementById("product3");
var qty3 = document.getElementById("qty3");
var price3 = document.getElementById("price3");

var product4 = document.getElementById("product4");
var qty4 = document.getElementById("qty4");
var price4 = document.getElementById("price4");

var product5 = document.getElementById("product5");
var qty5 = document.getElementById("qty5");
var price5 = document.getElementById("price5");

var product6 = document.getElementById("product6");
var qty6 = document.getElementById("qty6");
var price6 = document.getElementById("price6");

var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

function addOrder() {
  carts.textContent = "";
  var totalCost = 0;

  function addToCart(product, qty, price) {
    if (parseFloat(qty.value) > 0) {
      var order = qty.value.toString() + ' pc/s x ' + price.textContent + ' ------ ' + product.textContent + ' ------ Php ' + (parseFloat(qty.value) * parseFloat(price.textContent)) + '\n';
      carts.textContent += order;
      totalCost += parseFloat(qty.value) * parseFloat(price.textContent);
    }
  }

  addToCart(product1, qty1, price1);
  addToCart(product2, qty2, price2);
  addToCart(product3, qty3, price3);
  addToCart(product4, qty4, price4);
  addToCart(product5, qty5, price5);
  addToCart(product6, qty6, price6);

  total.value = 'Php ' + totalCost.toFixed(2);
}

function calculateChange() {
  var totalCost = parseFloat(total.value.replace('Php ', ''));
  var cashTendered = parseFloat(cash.value);
  var changeAmount = cashTendered - totalCost;
  
  if (changeAmount < 0) {
    alert("Insufficient cash provided.");
    change.value = 'Php 0.00';
  } else {
    change.value = 'Php ' + changeAmount.toFixed(2);
  }
}

function clearAll() {
  qty1.value = qty2.value = qty3.value = qty4.value = qty5.value = qty6.value = "";
  total.value = cash.value = change.value = "";
  carts.textContent = "";
}

qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
qty3.addEventListener("keyup", addOrder);
qty4.addEventListener("keyup", addOrder);
qty5.addEventListener("keyup", addOrder);
qty6.addEventListener("keyup", addOrder);

cash.addEventListener("keyup", calculateChange);

var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clearAll);
