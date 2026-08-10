// Problem 2 – Product Store
const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 5 },
  { id: 2, name: "Phone", price: 30000, stock: 10 },
  { id: 3, name: "Tablet", price: 25000, stock: 0 },
  { id: 4, name: "Watch", price: 10000, stock: 7 }
];
// •	Tasks:
// 11.	Print all product names.
products.forEach(product=>console.log(product.name));

// 12.	Show only products that are in stock.
const inStockProducts = products.filter(product=> product.stock>0);
console.log(inStockProducts);
// products.filter(product=> product.stock>0).forEach(product=>console.log(product));


// 13.	Find the most expensive product.
const expensiveRpoduct = products.reduce((max,curr)=> curr.price>max.price?curr:max,products[0]);
console.log(expensiveRpoduct);

// 14.	Find the product with id = 2.
console.log(products.find(product=>product.id===2));

// 15.	Calculate the total inventory value (price × stock).

const totalInventoryValue = products.reduce((acc,curr)=> acc+(curr.price*curr.stock),0);
console.log(totalInventoryValue);

// 16.	Add a discount of 20% to every product.

const productsWithDiscount = products.map(product=>({
    ...product,
    price:product.price*0.8
}))
console.log(productsWithDiscount);

// 17.	Add a new product using the spread operator.
const newProduct = {id:5, name:"Headphones", price:15000, stock:15};
const updatedProducts = [...products,newProduct];
console.log(updatedProducts);

// 18.	Destructure the price and stock of the first product.
const {price:firstProductPrice, stock:firstProductStock}= products[0];
console.log(firstProductPrice, firstProductStock);

// 19.	Find products costing more than ₹20,000.
const expensiveProducts = products.filter(producst=> producst.price>20000);
console.log(expensiveProducts);

// 20.	Create an array of only product prices.

const productPrices = products.map(product=>product.price)
console.log(productPrices);
