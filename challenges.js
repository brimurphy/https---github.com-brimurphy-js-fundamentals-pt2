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

console.log(checkWinner(averageDolphins, averageKoalas));

// Test Data 2
averageDolphins = calcAverage(85, 54, 41);
averageKoalas = calcAverage(23, 34, 27);

console.log(checkWinner(averageDolphins, averageKoalas));