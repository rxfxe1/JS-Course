const populations = [10, 1441, 332, 83];

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

let percentages2 = [];
for (let i = 1; i <= populations.length; i++) {
  percentages2.push(percentageOfWorld1([i]));
}

console.log(percentages2);

console.log(percentages2.length === populations.length);

// correction

// const populations = [10, 1441, 332, 83];
// const percentages2 = [];

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// for (let i = 0; i < populations.length; i++) {
//   const perc = percentageOfWorld1(populations[i]);
//   percentages2.push(perc);
// }

// console.log(percentages2);
