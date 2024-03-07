// Function Declaration
function percentageOfWOrld1(population) {
    return (population / 7900) * 100;
};

// Function Expression
const percentageOfWOrld2 = function (population) {
    return (population / 7900) * 100;
}

const percPortugal = percentageOfWOrld1(11);
const percGermany = percentageOfWOrld1(83);
const percFinland = percentageOfWOrld1(6);

console.log(percentageOfWOrld1(percPortugal));
console.log(percentageOfWOrld1(percGermany));
console.log(percentageOfWOrld1(percFinland));

console.log(percentageOfWOrld2(percPortugal));
console.log(percentageOfWOrld2(percGermany));
console.log(percentageOfWOrld2(percFinland));