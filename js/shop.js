// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  const productArray = products.filter((user) => user.id == id);
  cartList.push(productArray[0]);

  calculateTotal();
  generateCart();
  applyPromotionsCart();
  console.log("cart", cart)
  console.log("CartList", cartList);
}

// Exercise 2
function cleanCart() {
  cartList = [];
}

// Exercise 3
function calculateTotal() {
  let total = cartList.reduce((sum, item) => sum + item.price, 0);
  console.log("Total", total);
}

// Exercise 4
function generateCart() {
  const count = {};
  // get the count for each products.
  cartList.forEach((element) => {
    count[element.name] = (count[element.name] || 0) + 1;
  });

  console.log("count", count)

  const uniqueItems = [];
  //create a new array with only unique elements
  const uniqueArr = cartList.filter((element) => {
    const isDuplicate = uniqueItems.includes(element.id);

    if (!isDuplicate) {
      uniqueItems.push(element.id);

      return true;
    }

    return false;
  });

  cart = [];
  uniqueArr.forEach((item) => {
    cart.push({
      name: item.name,
      price: item.price,
      type: item.grocery,
      quantity: count[item.name],
      subtotal: count[item.name] * item.price,
      subtotalWithDiscount: count[item.name] * item.price,
    });
  });

}

// Using the "cartlist" array that contains all the items in the shopping cart,
// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

// Exercise 5
function applyPromotionsCart() {
  cart.forEach((item) => {
    if (item.name == "cooking oil" && item.quantity >= 3) {
      item.subtotalWithDiscount = (item.subtotal * 0.8).toFixed(2);
    } else if (item.name == "Pasta" && item.quantity >= 10) {
      item.subtotalWithDiscount = (item.subtotal * 0.7).toFixed(2);
    }
  });
  console.log("Cart with discounts applied", cart);
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.


}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}

function open_modal() {
  console.log("Open Modal");
}
