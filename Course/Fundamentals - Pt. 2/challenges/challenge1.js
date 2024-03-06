"use strict"

const calcAverage = (score1, score2, score3) => { // since it's a one-liner, no need to return
    return (score1 + score2 + score3) / 3;
};

const scoreDolphins = calcAverage(85, 54, 41); // const or let ?
const scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = function() {
    const avgDolphins = scoreDolphins;
    const avgKoalas = scoreKoalas;
    console.log(avgDolphins, avgKoalas);

    if (avgDolphins > avgKoalas && avgDolphins >= (avgKoalas * 2)) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas > avgDolphins && avgKoalas >= (avgDolphins * 2)) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins...")
    }
};

checkWinner();


//      CORRECTION

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));
 
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
 
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
};
 
checkWinner(scoreDolphins, scoreKoalas);
*/