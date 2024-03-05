const scoreDolphins = (96 + 108 + 89) / 3;
console.log(scoreDolphins);

const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy")
// } else if (scoreKoalas > scoreDolphins) {
//     console.log("Koalas win the trophy")
// } else if (scoreDolphins===scoreKoalas) {
//     console.log("Both win the trophy")
// }

if (scoreDolphins && scoreKoalas >= 100) {
    if (scoreDolphins > scoreKoalas) {
        console.log("Dolphins win the trophy")
    } else if (scoreKoalas > scoreDolphins) {
        console.log("Koalas win the trophy")
    } else {
        if (scoreDolphins && scoreKoalas <= 100) {
            console.log("No team wins the trophy")
        } else {
            console.log("Both teams win the trophy")
        }
    }
} else {
    console.log("The teams don't meet the minimal requirements.")
}


//      CORRECTION

/*
// BONUS 1
const scoreDolphins = (97 + 112 + 82) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy")
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas win the trophy")
} else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy")
}


// BONUS 2

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both win the trophy");
} else {
    console.log("No one wins the trophy");
}
*/