// sort
const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "Mangoe", "Cherry", "Dates"];

// if u just put sort i wont work nicely since some of the alphabet are lowercase so will use localeCompare(b)
fruits.sort((a, b) => a.localeCompare(b));
// console.log(fruits);



// const sortedNumber = numbers.sort((a, b) => a - b); Ascending
const sortedNumber2 = numbers.sort((a, b)=> (b- a));
// console.log(sortedNumber2);  //Descending (Z → A)



// nested array flat

const arr = [1, 2, 3, [4, 5]]; //nested array
const flatArr = arr.flat(); // flat() will make everything in one array
// console.log(flatArr);

const arr2 = [1, 2, 3, [4, 5, [6, 7, 8]]]; //nested array
const flatArr2 = arr2.flat(2); // flat(2) will make everything in one array you have to tell them i want to add 2 layer.

// console.log(flatArr2); 
// // output [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]

// infinity for a lot of nested
const arr3 = [1, 2, 3, [4, 5, [6, 7, 8, [6, 7, 8, [6, 7, 8, [6, 7, 8]]]]]];
// console.log(arr3.flat(Infinity)); // so it will add everything.

const tagsFromPosts = [
    ["JavaScript", "react", "css" ],
    ["Node", "Express"],
    ["Css", "html", "react"]
];

// if u want to put everyhting in one and dont want to see the duplicate then
// const filterTags = new Set(tagsFromPosts.flat());

// console.log(filterTags);
// Set(7) { that will be the output
//   'JavaScript',
//   'react',
//   'css',
//   'Node',
//   'Express',
//   'Css',
//   'html'
// }

const filterTags = [...new Set(tagsFromPosts.flat())]; // if u want to see everything in one array
console.log(filterTags); //[ 'JavaScript', 'react', 'css', 'Node', 'Express', 'Css', 'html' ]
