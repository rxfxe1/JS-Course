const populations = [10, 1441, 332, 83];
const percentages2 = [];
const percentages3 = [];

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}

console.log(percentages2);

let y = 0;
while (y < populations.length) {
  const percent = percentageOfWorld1(populations[y]);
  percentages3.push(percent);
  y++;
}
console.log(percentages3);
