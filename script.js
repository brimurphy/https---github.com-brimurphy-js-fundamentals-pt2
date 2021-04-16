"use strict";
/*
// Strict mode
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log(`I can drive`);
// Will not allow reserved words
// const interface = "Audio";
// const private = 645;

// Functions

function logger() {
    console.log(`My name is Brian`);
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/
/*
//  Function Declarations vs Expressions

// Function Declaration (can be called before declaration)

const age1 = calcAge1(1983);

function calcAge1(birthYear) {
    return 2037 - birthYear;;
}
// Function Expression (can not be called before declaration)


const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1983);

console.log(age1, age2);
*/
/*
// Arrow Functions

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1983);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1983, "Brian"));
console.log(yearsUntilRetirement(1991, "Jonas"));
*/
/*
// Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/
/*
// Review Functions

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired!🎉`);
        return -1;
    }

    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1983, "Brian"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/

// Introduction to Arrays

// Instead of this
const friend1 = "Michael";
const friend2 = "Stephen";
const friend3 = "Peter";

// Literal syntax
const friends = ["Michael", "Stephen", "Peter"];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Alan", "Mary"]; Whole Arrays can't be changed
// Variables and Arrays can be in an Array
const firstName = "Brian";
const brian = [firstName, "Murphy", 2037 - 1983, "technician", friends];

console.log(brian);
console.log(brian.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1983, 1991, 1995, 1998, 2001, 2019];
console.log(calcAge(years)); // Will return NaN
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
