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
/*
function Buy(id) {
  const productArray = products.filter((user) => user.id == id);
  cartList.push(productArray[0]);

  calculateTotal();
  generateCart();
  applyPromotionsCart();
  updateCartDisplayTotal();
  console.log("cart", cart);
  console.log("CartList", cartList);
}
*/

// Exercise 2
function cleanCart() {
  cleanCartDisplay();
  cartList = [];
  cart = [];

  const sect = document.querySelector("#count_product");
  const cartTotalDisplay = document.querySelector("#total_price");


  sect.textContent = 0;
  cartTotalDisplay.textContent = 0;
}

// Exercise 3
function calculateTotal() {
  const cartTotalDisplay = document.querySelector("#total_price");
  let total = cart.reduce((sum, item) => sum + item.subtotalWithDiscount, 0);
 cartTotalDisplay.textContent = total.toFixed(2);
}

// Exercise 4
/*
function generateCart() {
  const count = {};
  // get the count for each products.
  cartList.forEach((element) => {
    count[element.name] = (count[element.name] || 0) + 1;
  });

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
*/

// Using the "cartlist" array that contains all the items in the shopping cart,
// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

// Exercise 5
function applyPromotionsCart() {
  cart.forEach((item) => {
    if (item.name == "cooking oil" && item.quantity >= 3) {
      item.subtotalWithDiscount = item.subtotal * 0.8;
    } else if (item.name == "Pasta" && item.quantity >= 10) {
      item.subtotalWithDiscount = item.subtotal * 0.7;
    }
  });
  console.log("Cart with discounts applied", cart);
}

// Exercise 6
function printCart() {
  const sect = document.querySelector("#cart_list");

  //loop through childs of cart and remove all of them
  cleanCartDisplay();

  cart.forEach((item) => {
    const tableRow = document.createElement("tr");
    //create logic if 0 items in cart handler
    const tableHeading = document.createElement("th");
    tableHeading.textContent = item.name;

    const tablePrice = document.createElement("td");
    tablePrice.textContent = `$${item.price}`;

    const tableQuantity = document.createElement("td");
    tableQuantity.textContent = `${item.quantity}`;

    const tableSubtotal = document.createElement("td");
    tableSubtotal.textContent = `$${item.subtotalWithDiscount.toFixed(2)}`;

    sect.appendChild(tableRow);
    tableRow.appendChild(tableHeading);
    tableRow.appendChild(tablePrice);
    tableRow.appendChild(tableQuantity);
    tableRow.appendChild(tableSubtotal);
  });
}

function cleanCartDisplay() {
  const sect = document.querySelector("#cart_list");

  while (sect.lastElementChild) {
    sect.removeChild(sect.lastElementChild);
  }
}

function updateCartDisplayCount() {
  const cartTotalDisplay = document.querySelector("#count_product");
  let total = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartTotalDisplay.textContent = total;
}

// ** Nivell II **
// Exercise 8
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.

 // cartlist is initial Array that needs to get cleaned up
  const productArray = products.filter((user) => user.id == id);
  cartList.push(productArray[0]);

   // get the count for each products.
   let count = {};
   cartList.forEach((element) => {
    count[element.name] = (count[element.name] || 0) + 1;
  });
  //create a new array with no repeating elements
  uniqueArr = removeDuplicates(cartList);

  //every time this function is called, cart must be made empty otherwise loop of unique items will keep being added.
  cart = [];

  uniqueArr.forEach((item) => {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      type: item.grocery,
      quantity: count[item.name],
      subtotal: count[item.name] * item.price,
      subtotalWithDiscount: parseInt(count[item.name]) * item.price,
    });
  });

  applyPromotionsCart();
  calculateTotal();
  updateCartDisplayCount();
  
}

function removeDuplicates(array) {
  const uniqueItems = [];
  const uniqueArr = array.filter((element) => {
    const isDuplicate = uniqueItems.includes(element.id);
    if (!isDuplicate) {
      uniqueItems.push(element.id);

      return true;
    }

    return false;
  });

  return uniqueArr;
}

// Exercise 9
function removeFromCart(id) {

  cart.forEach((item, idx) => {
    if (item.id === id) {
      if (item.quantity == 1) {
        cart.splice(idx, 1);
      } else {
        item.quantity = item.quantity - 1;
        item.subtotal = item.subtotal - item.price;
      }
    }
  });
  updateCartDisplayCount();
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  const matchesID = (element) => element.id === id;

  let cartListIdx = cartList.findIndex(matchesID);
  cartList.splice(cartListIdx, 1);
  calculateTotal();
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
