const myCountry = {
    country: "Portugal",
    capital: "Lisbon",
    language: "portuguese",
    population: 11,
    neighbours: ["Spain", "Atlantic Ocean"],
    describe: function () {
        console.log(
            `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring contries and a capital called ${this.capital}.`
        );
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.isIsland;
        // simpler version (see why this works!)
        // this.isIsland = !Boolean(this.neighbours.lenght);
    }
}

myCountry.describe();
console.log(myCountry.checkIsland());

// console.log(myCountry);