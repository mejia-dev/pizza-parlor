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


// Business Logic
