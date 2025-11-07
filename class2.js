// 2-2 The Core Transformation Toolkit (map, filter, sort, slice

// My input
const rawApiData = [
  {
    id: "1",
    productName: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    rating: 4.5,
    stock: 120
  },
  {
    id: "2",
    productName: "Bluetooth Headphones",
    category: "Electronics",
    price: 1499,
    rating: 4.3,
    stock: 80
  },
  {
    id: "3",
    productName: "Smart Watch",
    category: "Gadgets",
    price: 2499,
    rating: 4.7,
    stock: 50
  },
  {
    id: "4",
    productName: "Gaming Keyboard",
    category: "Electronics",
    price: 1799,
    rating: 4.6,
    stock: 70
  },
  {
    id: "5",
    productName: "LED Monitor 24 inch",
    category: "Electronics",
    price: 10499,
    rating: 4.8,
    stock: 30
  },
  {
    id: "6",
    productName: "Office Chair",
    category: "Furniture",
    price: 3299,
    rating: 4.2,
    stock: 60
  },
  {
    id: "7",
    productName: "Coffee Mug",
    category: "Kitchen",
    price: 299,
    rating: 4.0,
    stock: 200
  },
  {
    id: "8",
    productName: "Running Shoes",
    category: "Fashion",
    price: 2499,
    rating: 4.4,
    stock: 90
  },
  {
    id: "9",
    productName: "Backpack",
    category: "Accessories",
    price: 999,
    rating: 4.1,
    stock: 100
  },
  {
    id: "10",
    productName: "Water Bottle",
    category: "Kitchen",
    price: 499,
    rating: 4.3,
    stock: 150
  }
];


//?  Output => [{ name : "phone"}, { name : "Smart Watch"}];

// * Process
// filter => electronic
// sort by rating => rating
// slice => top 3 first 3
//  Map => transform object shape to { name : "Name"}



// filter
// const topElectronicProducts = rawApiData.filter(
//     (item) => item.category === "Electronics"
// );
// console.log(topElectronicProducts);

// Sort
const topElectronicProducts = rawApiData.filter(
    (item) => item.category === "Electronics"
).sort((a, b) => b.rating - a.rating)
.slice(0, 3)
// .map(item =>{
//     return {name : item.productName}
// })
// one liner
.map((item) => ({name : item.productName}));
;
console.log(topElectronicProducts);
