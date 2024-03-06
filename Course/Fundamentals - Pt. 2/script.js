"use strict";

//      STRICT MODE
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive.");

// const interface = "Audio";
// const private = "Private";
// const if = 23;
// some variable names are reserved for future features or forbidden names
*/


//      FUNCTION FUNDAMENTALS
/*
function logger() {
    console.log("My name is Rafael.");
}

// calling, running or invoking the function
logger();
// logger(); // as many times as we want
// logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0); // values that are assigned to the parameters defined earlier
console.log(appleJuice);


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/


//      FUNCTION DECLARATIONS VS EXPRESSIONS

/*
// Function Declaration

// function calcAge1(birthYear) {
//     const age = 2024 - birthYear;
//     return age;
// }

// we can return everything in one go like this
function calcAge1(birthYear) {
    return 2024 - birthYear;
}
const age1 = calcAge1(2004);


// Functions Expression
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}
const age2 = calcAge2(2004);


console.log(age1, age2);
*/


//      ARROW FUNCTIONS

/*
// Arrow function
const calAge3 = birthYear => 2024 - birthYear;
const age3 = calAge3(2004);
console.log(age3);

// Arrow function with more than 1 line of code
const yearsUntilRetirement = birthYear => {
    const age = 2024 - birthYear; // First we calculate the age
    const retirement = 65 - age; // Then how many years until retirement
    return retirement; // With multiple lines we need to return
}
console.log(yearsUntilRetirement(2004)); // We can directly log it

// If we need more than 1 parameter, we just use (), i.e. (birthYear, firstName)
// Arrow function don't get the "this" keyword
*/


//      FUNCTIONS CALLING ANOTHER FUNCTIONS

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/


//      FUNCTIONS REVIEW

/*
const calcAge = function (birthYear) {
    return 2024 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(2004, "Rafael"));
console.log(yearsUntilRetirement(1991, "Jonas"));
*/


//       INTRODUCTION TO ARRAYS

/*
// instead of doing this
const friend1 = "Michael";
const friend2 = "Sarah";
const friend3 = "John";

// we do this
const friends = ["Michael", "Sarah", "John"];
console.log(friends);

// we can also do it like this
const years = new Array(1999, 2002, 2004, 2024);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); // gives the last element

friends[2] = "Juan";
console.log(friends);

// friends = ["Bob", "Alice"]; // not possible, we can only change primitive values


// we can store different types of values in the same array
const firstName = "Rafael";
const rafael = [firstName, "Silva", 2024 - 2004, "Student", friends];
console.log(rafael);


// Exercise 
const calcAge = function (birthYear) {
    return 2024 - birthYear;
}
const year = [1977, 1982, 2002, 2004, 2010];

// if we wanted to calculate the age of all the values in the array
// we could not do this
// console.log(calcAge(year)); // does not work because is an array and not a single value

//what we can do is
const age1 = calcAge(year[0]); // first element
const age2 = calcAge(year[1]); // second element
const age3 = calcAge(year[year.length - 1]); // last element
console.log(age1, age2, age3);

// same thing with an Array
const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length - 1])];

console.log(ages);
*/