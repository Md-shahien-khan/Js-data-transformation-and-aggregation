// sort
const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "Mangoe", "Cherry", "Dates"];

// if u just put sort i wont work nicely since some of the alphabet are lowercase so will use localeCompare(b)
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits);



// const sortedNumber = numbers.sort((a, b) => a - b); Ascending
const sortedNumber2 = numbers.sort((a, b)=> (b- a));
// console.log(sortedNumber2);  //Descending (Z → A)

// nested array flat
const tagsFromPosts = [
    ["JavaScript", "react", "css" ],
    ["Node", "Express"],
    ["Css", "html", "react"]
];

// same
const currentUserRole = ["user", "editor"];
const featureAccessRole = ["admin", "Manager"]