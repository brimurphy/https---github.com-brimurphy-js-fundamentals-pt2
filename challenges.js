// JavaScript Fundamentals – Part 2

// Coding Challenge 1:

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// Test Data 1
let averageDolphins = calcAverage(44, 23, 71);
let averageKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win ${avgDolphins} - ${avgKoalas}`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win ${avgKoalas} - ${avgDolphins}`;
    } else {
        return `The scores ${avgDolphins} to ${avgKoalas} aren't double, nobody wins!`;
    }
}

// console.log(checkWinner(averageDolphins, averageKoalas));

// Test Data 2
averageDolphins = calcAverage(85, 54, 41);
averageKoalas = calcAverage(23, 34, 27);

// console.log(checkWinner(averageDolphins, averageKoalas));

// Coding Challenge 2:

const bills = [125, 555, 44];
const tips = [];
const billTotals = [];

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        const tip = bill * 0.15;
        tips.push(tip);
        const billTotal = bill + tip;
        billTotals.push(billTotal);
    } else {
        const tip = bill * 0.2;
        tips.push(tip);
        const billTotal = bill + tip;
        billTotals.push(billTotal);
    }
}

calcTip(125);
calcTip(555);
calcTip(44);

// console.log(tips);
// console.log(billTotals);
/*
//  Jonas's solution
const calcTips = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const tipsJonas = [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])];
const totals = [bills[0] + tipsJonas[0], bills[1] + tipsJonas[1], bills[2] + tipsJonas[2]];

console.log(bills, tipsJonas, totals);
*/

// Challenge 3:

const mark = {
    fullName: `Mark Miller`,
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

const john = {
    fullName: `John Smith`,
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}
/*
console.log(mark.BMI); // returns undefined because method not called yet
console.log(mark[`calcBMI`]()); // method is called
console.log(john[`calcBMI`]());
console.log(mark.BMI); // returns value

if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI of (${mark.BMI}) is higher than ${john.fullName}'s BMI of (${john.BMI})`)
} else if (mark.BMI < john.BMI) {
    console.log(`${john.fullName}'s BMI of (${john.BMI}) is higher than ${mark.fullName}'s BMI of (${mark.BMI})`);
} else {
    console.log(`${mark.fullName}'s BMI of ${mark.BMI} and ${john.fullName}'s BMI of ${john.BMI} are the same.`);
}
*/
