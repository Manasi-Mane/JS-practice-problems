// Problem 4 – Online Shopping Cart
const cart = [
  { id: 1, item: "Shoes", price: 2500, quantity: 2 },
  { id: 2, item: "Bag", price: 1500, quantity: 1 },
  { id: 3, item: "Shirt", price: 1200, quantity: 3 }
];
// •	Tasks:
// 31.	Print all item names.
cart.forEach(cartItem=>console.log(cartItem.item));


// 32.	Calculate the total cart value.
const totalCartValue = cart.reduce((acc,curr)=> acc+(curr.price*curr.quantity),0);
console.log(totalCartValue);

// 33.	Find the most expensive item.
const mostExpensiveItem = cart.reduce((max,curr)=> curr.price>max.price?curr:max,cart[0]);
console.log(mostExpensiveItem);

// 34.	Increase every item's quantity by 1.
const updatedCart = cart.map(cartItem=>({
    ...cartItem,
    quantity: cartItem.quantity + 1
}));
console.log(updatedCart);

// 35.	Find the item with id = 2.
console.log(cart.find(cartItem=>cartItem.id===2));

// 36.	Add a new item.
const newItem = {id:4, item:"Watch", price:2000, quantity:1};
const updatedCartWithNewItem = [...cart,newItem];
console.log(updatedCartWithNewItem);    


// 37.	Create a new array with a totalPrice property.
const cartWithTotalPrice = cart.map(cartItem=>({
    ...cartItem,
    totalPrice: cartItem.price * cartItem.quantity
}));
console.log(cartWithTotalPrice);

// 38.	Destructure item and quantity.
const {item:firstItemName, quantity:firstItemQuantity} = cart[0];
console.log(firstItemName, firstItemQuantity);

// 39.	Find items costing more than ₹1500.
const expensiveItems = cart.filter(cartItem=> cartItem.price>1500);
console.log(expensiveItems);

// 40.	Calculate the average item price.
const totalPrice = cart.reduce((acc,curr)=> acc+curr.price,0);
const averagePrice = totalPrice/cart.length;
console.log(averagePrice);
