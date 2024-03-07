const percentageOfWorld1 = function (population) {
    return (population / 7900) * 100;
};

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description);
};

describePopulation('Portugal', 10);
describePopulation('China', 1441);
describePopulation('USA', 332);