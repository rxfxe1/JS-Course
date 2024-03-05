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