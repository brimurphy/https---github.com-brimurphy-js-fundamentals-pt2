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

// Functions Calling Other Functions