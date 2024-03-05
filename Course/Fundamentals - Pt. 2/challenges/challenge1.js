let calcAverage = (score1, score2, score3) => {
    let scoreAverage = (score1 + score2 + score3) / 3;
    return scoreAverage;
}


scoreDolphins = calcAverage(44, 23, 7);
console.log(scoreDolphins);
scoreKoalas = calcAverage(85, 54, 40);
console.log(scoreDolphins);

const checkWinner = function (avgDolphins, avgKoalas) {
    avgDolphins = scoreDolphins;
    avgKoalas = scoreKoalas;
    
    if (avgDolphins > avgKoalas && avgDolphins >= (avgKoalas * 2)) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas > avgDolphins && avgKoalas >= (avgDolphins * 2)) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins...");
    }
    return checkWinner;
}
 
console.log(checkWinner);