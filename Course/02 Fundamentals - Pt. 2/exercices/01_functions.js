const describeCountry = function (country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descPortugal = describeCountry("Portugal", 11, "Lisbon");
const descGermany = describeCountry("Germany", 83, "Berlin");
const descFinland = describeCountry("Finland", 6, "Helsinki");

console.log(descPortugal);
console.log(descGermany);
console.log(descFinland);