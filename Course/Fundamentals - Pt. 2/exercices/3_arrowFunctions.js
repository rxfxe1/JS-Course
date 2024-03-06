const percentageOfWorld3 = population => (population / 7900) * 100;

const percPortugal = percentageOfWorld3(11);
const percGermany = percentageOfWorld3(83);
const percFinland = percentageOfWorld3(6);

console.log(percentageOfWorld3(percPortugal));
console.log(percentageOfWorld3(percGermany));
console.log(percentageOfWorld3(percFinland));