//      LINKING JS FILE
/*
let js = 'amazing';
console.log(40+90-50);
*/


//      VALUES AND VARIABLES
/*
console.log("Rafael");

let firstName = "Rafael";
console.log(firstName);
*/


//      PRACTICE ASSIGNMENT
/*
let country = "Portugal";
let continent = "Europe";
let population = 11000000;

console.log("My coutry is ", {country}, " in ", {continent}, " with a population of", {population});
*/


//      DATA TYPES
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 16);
console.log(typeof "Rafael");

javascriptIsFun = "Yes!";
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2024;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/


//      OPERATORS

/*
//  Math operators

const now = 2024;
const ageRafael = now - 2004;
const ageSarah = now - 1991;
console.log("Rafael and Sarah age: ", ageRafael, ageSarah);

console.log("Rafael age * 2, / 2 and 2 to the power of 3: ", ageRafael * 2, ageRafael / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Rafael";
const lastName = "Silva";
console.log(firstName + " " + lastName);


// typeof operator


//  Assignement Operators

// = operator
let x = 10 + 6;
console.log("x = ", x);


// += operator
x += 8; // x = x + 8
console.log("+= operator: x + 8 = ", x);


// *= operator
x *= 4; // x = x * 4 = ((10+6) + 8) * 4 = 24 * 4 = 96
console.log("*= operator: x = x * 4 = 24 * 4 = ", x);


// /= operator
x /= 4; // x = 96 / 4 = 24
console.log("/= operator: x = x / 4 = ", x);


// ++ operator
x++; // x = x + 1
console.log("x++ operator: x + 1 = ", x);


// -- operator
x--; // x = x -1
console.log("x-- operator: x - 1 = ", x);


// Comparison operators

console.log(ageSarah > ageRafael); // >, <, >= , <=
console.log(ageRafael >= 18);

const isFullAge = ageRafael >= 18;

console.log(now - 1991 > now - 2004);
*/


//      OPERATOR PRECEDENCE

/*
const now = 2024;
const ageRafael = now - 2004;
const ageSarah = now - 1991;

console.log(now - 1991 > now - 2004);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

// const averageAge = ageRafael + ageSarah / 2;  "/" operator has higher precedence then "+" so it'll be done first = wrong
const averageAge = (ageRafael + ageSarah) / 2; // the right way with ()
console.log(ageRafael, ageSarah, averageAge);
*/



//      STRINGS AND TEMPLATE LITERALS

/*
const firstName = "Rafael";
const job = "Student";
const birthYear = 2004;
const year = 2024;

// const rafael = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + ".";
// console.log(rafael);

const rafaelNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;
console.log(rafaelNew);

console.log("String with \n\
multiple \n\
lines");

console.log(`String with
multiple
lines`);
*/


//      IF ELSE STATEMENTS

/*
const age = 19;
// const isOldEnough = age >= 18;


if (age >= 18) {
    console.log("Sarah can start her driving license 🚗")
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, wait another ${yearsLeft} years.`)
}


const birthYear = 2004;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/



//      TYPE CONVERSION AND COERCION

/*
// Type Conversion

const inputYear = "2004";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);


// Type Coercion

console.log("I'am " + 20 + " years old.");
console.log("I'am " + "20" + " years old."); // same thing
console.log("I'am " + String(20) + " years old."); // same thing

console.log("23" - "10" - 3);
// The "-" operator converted the strings to numbers.

console.log("23" + "10" + 3);
// The "+" operator converts the numbers to strings.
// So console.log("1" + 1); would be equal to 11, because it concatenates the strings.

console.log("23" * "2");
// It converts to numbers and calculates the result.
// Same for "/"

let n = "1" + 1;
n = n - 1;
console.log(n);
// With the "+" operator, it converts to a string: "1" + 1 = 11
// With the "-" operator converts the string to a number: n = 11 - 1 = 10
*/



//      TRUTHY AND FALSY VALUES

/*
// 5 falsy values: 0, "", undefined, null, NaN

console.log(Boolean(0));            // false
console.log(Boolean(undefined) );   // false
console.log(Boolean("Rafael"));     // true
console.log(Boolean({}));           // true
console.log(Boolean(""));           // false

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!");
}
// JS will execute the else block because 0 is considered falsy


let height;
if (height) {
    console.log("Height is defined.");
} else {
    console.log("Height is undefined.");
}
// This returns the else block because "height" is "undefined" = falsy value
// same would happen if the "height = 0" = falsy value
// if let height = 123, then the "if" block would be executed
*/



//      EQUALITY OPERATORS == VS. ===

/*
const age = "18";
if (age === 18) console.log("You just became an adult (strict)");

if (age == 18) console.log("You just became an adult (loose)");


const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) { // "23" == 23 | COERCION
    console.log("Cool, that's an amazing number");
}


const age = Number(prompt("What's your age?"));
console.log(age);
console.log(typeof age);

if (age === 20) { // 20 === 20 | NO COERCION
    console.log("You are 20 years old");
}


const fingers = Number(prompt("How many fingers do you have?"));
console.log(fingers);
console.log(typeof fingers);

if (fingers === 10) {
    console.log("Nice, you have all your fingers.")
} else if (fingers === 5) {
    console.log("You have all your fingers in your hand.")
} else {
    console.log("You lost a few fingers.")
}

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is an amazing number!")
} else if (favourite === 7) {
    console.log("7 is also a cool number")
} else if (favourite === 9) {
    console.log("9 is also a cool number")
} else {
    console.log("Number is not 23 or 7 or 9")
}


// Different Operator
// != loose operator
// !== strict operator

if (favourite !== 23) console.log("Why not 23?");
*/