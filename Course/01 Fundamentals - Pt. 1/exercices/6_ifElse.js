// If your country's population is greater than 33 million, log a string like this to the console: 
// "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).
// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.

const country = "Portugal";
let population = 11;
const averagePopulation = 33;

if (population > averagePopulation) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(
        `${country}'s population is ${averagePopulation - population} million below average.`
    );
}