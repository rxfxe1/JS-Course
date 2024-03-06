const populations = [10, 1441, 332, 83];

console.log(populations.length === 4); // logs true or false if the array has 4 elements.

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages);