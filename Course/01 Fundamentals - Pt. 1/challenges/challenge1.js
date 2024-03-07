/* Code for Challenge #1 in Fundamentals - Part 1  */


// Mark's Information

const massMark = 78;
const heightMark = 1.69;

const BMIMark = massMark / (heightMark * heightMark);
console.log("Mark's BMI is: ", BMIMark);


// John's Information

const massJohn = 92;
const heightJohn = 1.95;

const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log("John's BMI is: ", BMIJohn);


// BONUS

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);



/* 
The way Jonas did

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn * heightJohn;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/