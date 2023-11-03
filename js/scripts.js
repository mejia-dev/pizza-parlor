// Business Logic for Cart constructor
function Cart() {
  this.items = {};
  this.currentId = 0;
}

Cart.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

Cart.prototype.addItem = function (item) {
  item.id = this.assignId();
  this.items[item.id] = item;
};


// Business Logic for Pizza constructor
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.calculatePrice = function () {
  let price = 0;
  if (this.size === "S") {
    price = 8;
  } else if (this.size === "M") {
    price = 10;
  } else if (this.size === "L") {
    price = 12;
  }
  this.toppings.forEach(function (topping) {
    price += 1;
  });
  return price;
};


// Global Variables
let myCart = new Cart;


// UI Logic
function pizzaBuilderSubmit() {
  event.preventDefault();
  const sizeSelection = document.querySelector("input[name='size']:checked").value;
  const toppingSelection = document.querySelectorAll("input[name='topping']:checked").value;
  let toppingArray = [];
  for (let i = 0; i < toppingSelection.length; i++) {
    toppingArray.push(toppingSelection[i].value);
  }
  const newPizza = new Pizza(sizeSelection, toppingArray);
  myCart.addItem(newPizza)
}

window.addEventListener("load", function () {
  this.document.getElementById("pizzaBuilder").addEventListener("submit", pizzaBuilderSubmit)
});