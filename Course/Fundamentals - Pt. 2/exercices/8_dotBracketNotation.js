const myCountry = {
    country: "Portugal",
    capital: "Lisbon",
    language: "portuguese",
    population: 11,
    neighbours: ["Spain", "Atlantic Ocean"] // added ocean bc no more neighbours
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring contries and a capital called ${myCountry.capital}.`);

myCountry.population += 2; // increase the population by 2 (million)
console.log(myCountry.population);

myCountry.population -= 2; // decrease the population by 2 (million)
console.log(myCountry.population);