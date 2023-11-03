Describe: Cart()

Test: "It will construct a new empty Cart object to contain other objects"
Code: const myCart() = new Cart;
Expected Output: Cart{}


Describe: Cart.prototype.addItem

Test: "It will add an object to the Cart's 'items' property"
Code: myCart().addItem(myObject)
Expected Output: myCart(items:{myObject})


Describe: Cart.prototype.assignId

Test: "It will assign an Id to any object added to the cart and use this Id as the object's key"
Code: myCart().addItem(myObject)
Expected Output: myCart(items:{1})


Describe: Pizza()

Test: "It will construct a new Pizza object with a string property for size, and an array property for toppings"
Code: myPizza1 = new Pizza("L",["pepperoni", "pineapple"])
Expected Output: Pizza { size: "L", toppings: ["pepperoni", "pineapple"]}


Describe: calculatePrice()

Test: "It will return the cost of a Pizza object based on the pizza's size. S=8, M=10, L=12"
Code: 
myPizza1 = new Pizza("L",["pepperoni", "pineapple"]);
calculatePrice(myPizza1);
Expected Output: 12

Test: "It will return the cost of a Pizza object based on the number of the pizza's toppings. Each topping adds 1."
Code: myPizza1 = new Pizza("L",["pepperoni", "pineapple"]);
calculatePrice(myPizza1);
Expected Output: 14