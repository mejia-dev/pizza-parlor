# Epicrust Pizza Parlor

#### By github.com/mejia-dev

#### A simple website to create and order pizzas from the best pizza place in town!

## Technologies Used

* HTML
* CSS
* JavaScript

## Description

This webpage is an example of what a pizza parlor's website could look like and includes a functioning system to add pizzas to the cart.

## Setup/Installation Requirements
Option A:
* Navigate to https://mejia-dev.github.io/pizza-parlor/ in your browser of choice

Option B:
* Clone this repository to your desktop (from the git console, run "git clone https://github.com/mejia-dev/pizza-parlor.git" without quotes)
* Navigate to the top level of the directory.
* Open the index.html file in your browser of choice.


## Known Bugs

* none

## License

MIT License

Copyright (c) 2023 github.com/mejia-dev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Tests:

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


Describe: Cart.prototype.removeItem

Test: "It will remove an object from the Cart's 'items' property by id"
Code: myCart().removeItem(1);
Expected Output: true;


Describe: Pizza()

Test: "It will construct a new Pizza object with a string property for size, and an array property for toppings"
Code: myPizza1 = new Pizza("L",["pepperoni", "pineapple"])
Expected Output: Pizza { size: "L", toppings: ["pepperoni", "pineapple"]}


Describe: Pizza.prototype.calculatePrice

Test: "It will return the cost of a Pizza object based on the pizza's size. S=8, M=10, L=12"
Code: 
myPizza1 = new Pizza("L",["pepperoni", "pineapple"]);
calculatePrice(myPizza1);
Expected Output: 12

Test: "It will return the cost of a Pizza object based on the number of the pizza's toppings. Each topping adds 1."
Code: myPizza1 = new Pizza("L",["pepperoni", "pineapple"]);
calculatePrice(myPizza1);
Expected Output: 14


Describe: buildPizza(size, toppings)

Test: "It will use constructors to build a new Pizza object."
Code: buildPizza("L", ["pepperoni", "pineapple"])
Expected Output: Pizza { size: "L", toppings: ["pepperoni", "pineapple"]}

Test: "It will add the new Pizza object to the global cart."
Code: buildPizza("L", ["pepperoni", "pineapple"])
Expected Output: myCart { items: "Pizza { id: 1, size: "L", toppings: ["pepperoni", "pineapple"]}" }


Describe: deleteCartItem(id)

Test: "It will remove the associated pizza object from the global myCart using the prototype removeItem"
Code: deleteCartItem(1)
Expected Output: undefined