// some


const numbers = [1, 11, 3, 9, 5];

const hasEvenNumber = numbers.some((number) => number % 2 == 0);
// console.log(hasEvenNumber);

// const currentUserRole = ["user", "editor"];
const currentUserRole = ["user", "editor", "admin"];
const featureAccessRole = ["admin", "Manager"];

const canAccess = currentUserRole.some((role) =>
    featureAccessRole.includes(role)
);
// console.log(canAccess); // we wanted to see if that current role person that atleast one role from feature access.

// we can make a array like that
// const arr = Array.from({ length : 5}); console.log(arr); output : [ undefined, undefined, undefined, undefined, undefined ]
// const arr = Array.from({ length : 5}).fill(0); console.log(arr) if u add fill it will add 5 0, or u can put null

// const arr = Array.from({ length : 5}, (_, i) => i); console.log(arr) output : [ 0, 1, 2, 3, 4 ]
// const arr = Array.from([1, 2, 3, 4, 5], (value, i) => value * value); console.log(arr)

const range = (start, stop, step) =>
    Array.from(
        { length : Math.ceil((stop - start) / step)},
        (_,i)=> start + i * step
    );
console.log(range(0, 11, 1));