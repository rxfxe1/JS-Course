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