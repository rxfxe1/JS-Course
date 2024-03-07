"use strict"

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        console.log(`The tip amount is: ${bill * 0.15}`);
    } else {
        console.log(`The tip amount is: ${bill * 0.2}`);
    }
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// 125 * 0.15 = 18,75           143,75
// 555 * 0.2 =  111             666
// 44 * 0.2 = 8.8               52.8

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

// for calTip we could have done it with Ternary Operator or Arrow Function

// Ternary 
const calcTipTernary = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Arrow
const calcTipArrow = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;