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
  this.toppings.forEach(function(topping) {
    price += 1;
  });
  return price;
};


// Global Variables
let myCart = new Cart;


// Business Logic
function buildPizza(size, toppings) {
  let toppingArray = [];
  for (let i = 0; i < toppings.length; i++) {
    toppingArray.push(toppings[i].value);
  }
  const newPizza = new Pizza(size, toppingArray);
  myCart.addItem(newPizza);
  updateCartItems()
}


// UI Logic
function pizzaBuilderSubmit() {
  event.preventDefault();
  const sizeSelection = document.querySelector("input[name='size']:checked").value;
  const toppingSelection = document.querySelectorAll("input[name='topping']:checked");
  buildPizza(sizeSelection, toppingSelection);
}

function updateCartItems() {
  let bannerCartItemNumber = document.getElementById("bannerCartItemNumber");
  const myCartLatestId = myCart.currentId;
  const cartItemsDiv = document.getElementById("cartItemsDiv");
  bannerCartItemNumber.innerText = myCartLatestId;
  let newCartItem = document.createElement("div");
  newCartItem.setAttribute("class", "cartItem");
  let newCartItemTitle = document.createElement("h4");
  newCartItemTitle.append("Pizza " + myCartLatestId)
  newCartItem.append(newCartItemTitle);
  let newCartItemText = document.createElement("p");
  let longformSizeName = "";
  if (myCart.items[myCartLatestId].size === "S") {
    longformSizeName = "Small";
  } else if (myCart.items[myCartLatestId].size === "M") {
    longformSizeName = "Medium";
  } else if (myCart.items[myCartLatestId].size === "L") {
    longformSizeName = "Large";
  }
  newCartItemText.append("Size: " + longformSizeName);
  newCartItemText.append(document.createElement("br"));
  newCartItemText.append("Toppings:");
  let newCartItemToppingsList = document.createElement("ul");
  let newCartItemToppings = myCart.items[myCartLatestId].toppings;
  newCartItemToppings.forEach(function (topping) {
    let newCartItemLi = document.createElement("li");
    newCartItemLi.append(topping);
    newCartItemToppingsList.append(newCartItemLi);
  })
  newCartItemText.append(newCartItemToppingsList);
  let newCartItemPrice = myCart.items[myCartLatestId].calculatePrice();
  newCartItemText.append("Price: $" + newCartItemPrice + ".00");
  newCartItem.append(newCartItemText);
  cartItemsDiv.append(newCartItem);
}

function toggleCartVisibility() {
  event.preventDefault();
  document.getElementById("cartDiv").classList.toggle("hidden");
};

window.addEventListener("load", function () {
  this.document.getElementById("pizzaBuilder").addEventListener("submit", pizzaBuilderSubmit)
  this.document.getElementById("cartButton").addEventListener("click", toggleCartVisibility)
});