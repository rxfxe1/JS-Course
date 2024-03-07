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


//      BASIC ARRAY OPERATIONS (METHODS)

/*
// push method
const friends = ["Michael", "Sarah", "John"];
// friends.push("Jay");
// this method pushes a new value but also returns it's length if we store it in a variable
const newLength = friends.push("Jay");
console.log(newLength);


// unshift method
friends.unshift("Mark");
console.log(friends);
// this method adds a new element at the beginning of the array
// it also returns the length if necessary


// pop method
friends.pop();
console.log(friends);
// this method removes the last element of the array
// this method returns the removed element
const popped = friends.pop();
console.log(popped);
console.log(friends);


// shift method
friends.shift();
console.log(friends);
// this methods removes the first element of the array
// this method also returns the element that was removed


// indexOf method
console.log(friends.indexOf("Michael"));
// this method returns the index at which the element is located
// if we try with a non-existent element, we get -1


// includes method
console.log(friends.includes("Sarah"));
console.log(friends.includes("Bob"));
//this method returns a boolean value to tell us
// if the element we're looking for is present in the array

// this method uses strict equality to check
friends.push(23);
console.log(friends.includes("23")); // false
console.log(friends.includes(23)); // true

// we can use this method to write conditionals
if (friends.includes("Michael")) { // since this returns a boolean
    console.log("You have a friend called Michael");
}
*/


//      INTRODUCTION TO OBJECTS

/*
// array
const rafaelsArray = [
    'Rafael',
    'Silva',
    2024 - 2004,
    'student',
    ['Michael', 'Jonas', 'Sarah']
];

// object
const rafael = {
    firstName: 'Rafael', // firstName / key = property
    lastName: 'Silva',
    age: 2024 - 2004,
    job: 'student',
    friends: ['Michael', 'Jonas', 'Sarah']
};
*/


//      DOT VS BRACKET NOTATIONS

/*
const rafael = {
    firstName: 'Rafael',
    lastName: 'Silva',
    age: 2024 - 2004,
    job: 'student',
    friends: ['Michael', 'Jonas', 'Sarah']
};
console.log(rafael);

// dot notation
console.log(rafael.firstName); // . is an operator

// bracket notation
console.log(rafael['lastName']);

// this only works with bracket notation
// computed property name: first + Name = firstName bc concatenation
const nameKey = 'Name';
console.log(rafael['first' + nameKey]);
console.log(rafael['last' + nameKey]);


// when to use bracket notation
const interestedIn = prompt("What do you want to know about Rafael? Choose between firstName, lastName, age, job and friends.");
// console.log(rafael.interestedIn); // doesn't work bc interestedIn is not a property of rafael
console.log(rafael[interestedIn]); // works

// to prevent showing undefined
if (rafael[interestedIn]) {
    console.log(rafael[interestedIn]);
} else {
    console.log("Wrong input.");
};



// add new properties
// dot notation
rafael.location = "Portugal";

// bracket notation
rafael['phone'] = 912345678;

console.log(rafael);
console.log(rafael.friends[0]);


// challenge
// "Rafael has 3 friends and his best friend is Michael"
console.log(`${rafael.firstName} has ${rafael.friends.length} friends and his best friend is ${rafael.friends[0]}`);
*/


//      OBJECT METHODS

/*
// function inside object = method
const rafael = {
    firstName: 'Rafael',
    lastName: 'Silva',
    birthYear: 2004, // number value
    job: 'student', // string value
    friends: ['Michael', 'Jonas', 'Sarah'], // array value
    hasDriversLicense: true, // boolean value

    // calcAge: function (birthYear) { // function value
    //     return 2024 - birthYear
    // }

    // calcAge: function () {
    //     console.log(this); // logs the object
    //     return 2024 - this.birthYear
    // }

    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    // challenge correction
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job} and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`
    }
};
// "this" keyword -> DRY principle

// console.log(rafael.calcAge(2004)); // dot notation
// console.log(rafael['calcAge'](2004)); // bracket notation

console.log(rafael.calcAge());
console.log(rafael.age);


// challenge
// "Rafael is a 20 yo student and he has a/no drivers license"

//my answer
// rafael.getSummary = console.log(`${rafael.firstName} is a ${rafael.age} years old ${rafael.job} and he has ${rafael.hasDriversLicense ? "a" : "no"} drivers license`);
console.log(rafael.getSummary());
*/


//      LOOPS

/*
//      Iteration: The for Loop

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');

// instead of this

// for loop keeps runnig while condition TRUE
for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}


//      Looping Arrays, Breaking and Continuing

const rafaels = [
    'Rafael',
    'Silva',
    2024 - 2004,
    'student',
    ['Michael', 'Jonas', 'Sarah'],
    true
];

const types = [];  // empty array to store the type of data in

// console.log(rafael[0]);
// console.log(rafael[1]);
// ...
// console.log(rafael[4]);
// rafael[5] does NOT exist

// for (let i = 0; i < 5; i++) {
//     console.log(rafaels[i]);
// }

// so instead of 5, we write
for (let i = 0; i < rafaels.length; i++) {
    // reading from array
    console.log(rafaels[i], typeof rafaels[i]);

    // storing the type of data on each
    // types[i] = typeof rafaels[i];

    // another way to add elements to an array
    types.push(typeof rafaels[i]);
}
console.log(types);


// example: age calculator with loop
const years = [1977, 1982, 2002, 2004, 2010];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i]);
}

console.log(ages);


//      Continue and Break Statement

// continue statement -> skip current iteration and move to next one
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < rafaels.length; i++) {
    if (typeof rafaels[i] !== 'string') continue; // skip non-strings
    console.log(rafaels[i], typeof rafaels[i]);
}

// break statement -> stop the entire loop
// break with number
console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < rafaels.length; i++) {
    if (typeof rafaels[i] == 'number') break; // stop after number is found
    console.log(rafaels[i], typeof rafaels[i]);
}
*/


//      Looping Backwards and Loops in Loops

const rafael = [
    'Rafael',
    'Silva',
    2024 - 2004,
    'student',
    ['Michael', 'Jonas', 'Sarah']
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = rafael.length - 1; i >= 0; i--) {
    console.log(i, rafael[i]);
}

// loop inside a loop
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`------ Starting exercise ${exercise}:`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise: ${exercise}: Repetition #${rep}`);
    };
}