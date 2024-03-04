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

