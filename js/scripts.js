// Business Logic for Cart constructor
function Cart() {
  this.items = {};
  this.currentId = 0;
}

Cart.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

Cart.prototype.addItem = function (item) {
  item.id = this.assignId();
  this.items[item.id] = item;
};

Cart.prototype.removeItem = function (id) {
  if (this.items[id] === undefined) {
    return false;
  }
  delete this.items[id];
  return true;
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
  this.toppings.forEach(function () {
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
  updateCartItems();
}

function deleteCartItem(id) {
  myCart.removeItem(id);
  document.getElementById("cartItem" + id).remove();
  updateCartIconTotal();
}

// UI Logic
function pizzaBuilderSubmit() {
  event.preventDefault();
  const sizeSelection = document.querySelector("input[name='size']:checked").value;
  const toppingSelection = document.querySelectorAll("input[name='topping']:checked");
  buildPizza(sizeSelection, toppingSelection);
}

function updateCartItems() {
  updateCartIconTotal();
  const myCartLatestId = myCart.currentId;
  const cartItemsDiv = document.getElementById("cartItemsDiv");
  let newCartItem = document.createElement("div");
  newCartItem.setAttribute("class", "cartItem");
  newCartItem.setAttribute("id", "cartItem" + myCartLatestId);
  let newCartItemTitle = document.createElement("h4");
  newCartItemTitle.append("Pizza " + myCartLatestId);
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
  });
  newCartItemText.append(newCartItemToppingsList);
  let newCartItemPrice = myCart.items[myCartLatestId].calculatePrice();
  newCartItemText.append("Price: $" + newCartItemPrice + ".00");
  newCartItemText.append(document.createElement("br"));
  let newCartItemDeleteButton = document.createElement("span");
  newCartItemDeleteButton.setAttribute("class","cartRemoveItemButton");
  newCartItemDeleteButton.setAttribute("onclick","deleteCartItem(" + myCartLatestId + ")");
  newCartItemDeleteButton.append("Remove");
  newCartItemText.append(newCartItemDeleteButton);
  newCartItem.append(newCartItemText);
  cartItemsDiv.append(newCartItem);
  document.getElementById("emptyMessage").setAttribute("class", "hidden");
}

function updateCartIconTotal() {
  let bannerCartItemNumber = document.getElementById("bannerCartItemNumber");
  let numberOfItems = Object.keys(myCart.items).length;
  if (numberOfItems != 0) {
    bannerCartItemNumber.innerText = numberOfItems;
  } else if (numberOfItems === 0) {
    bannerCartItemNumber.innerText = "Empty";
  }
}

function toggleCartVisibility() {
  event.preventDefault();
  document.getElementById("cartDiv").classList.toggle("hidden");
}

window.addEventListener("load", function () {
  this.document.getElementById("pizzaBuilder").addEventListener("submit", pizzaBuilderSubmit);
  this.document.getElementById("cartButton").addEventListener("click", toggleCartVisibility);
});