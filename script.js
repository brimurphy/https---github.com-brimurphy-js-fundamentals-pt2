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
/*
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
*/
/*
// Basic Array Operations (Methods)

// Add Elements
const friends = ["Michael", "Stephen", "Peter"];
const newLength = friends.push(`Jay`);
console.log(friends);
console.log(newLength);

friends.unshift(`John`);
console.log(friends);

// Remove Elements

friends.pop(); // Removes last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Removes first element
console.log(friends);

console.log(friends.indexOf(`Stephen`));
console.log(friends.indexOf(`Bob`)); // Element doesn't exist, returns -1.

friends.push(23);
console.log(friends.includes(`Stephen`)); // True
console.log(friends.includes(`Bob`)); // False
// Includes method uses strict comparison
console.log(friends.includes(`23`)); // False
console.log(friends.includes(23)); // True

// Example
if (friends.includes(`Stephen`)) {
    console.log(`You have a friend called Stephen`);
}
*/
/*
// Introduction to Objects

const brian = {
    firstName: `Brian`,
    lastName: `Murphy`,
    age: 2037 - 1983,
    job: `Technician`,
    friends: [`Michael`, `Peter`, `Stephen`]
};

// Dot vs. Bracket Notation

console.log(brian.lastName);
console.log(brian[`lastName`]);

const nameKey = `Name`;
console.log(brian[`first` + nameKey]);
console.log(brian[`last` + nameKey]);

// dot notation returns an error in the console
// console.log(brian.`last` + nameKey);

// Example of using brackets over dot notation
const interestedIn = prompt(`What do you want to know about Brian? Choose between firstName, lastName, age, job, and friends.`);

if (brian[interestedIn]) {
    console.log(brian[interestedIn]);
} else {
    console.log(`Wrong request! Choose between firstName, lastName, age, job, and friends.`);
}

brian.location = `Ireland`;
brian[`twitter`] = `@briman`;
console.log(brian);

// Challenge
console.log(`${brian.firstName} has ${brian.friends.length} friends, and his best friend is ${brian.friends[0]}`);
*/
/*
// Object Methods

const brian = {
    firstName: `Brian`,
    lastName: `Murphy`,
    birthYear: 1983,
    job: `Technician`,
    friends: [`Michael`, `Peter`, `Stephen`],
    hasDriversLicence: true,
    // Calling function in an object, the value is the function
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }
    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        // if (this.hasDriversLicence) {
        //     return `${this.firstName} is a ${this.age} ${this.job}, and he has a driver's licence 🚗`;
        // } else {
        //     return `${this.firstName} is a ${this.age} ${this.job}, and he does not have a driver's licence 🚶‍♂️`;
        // }

        // Jonas solution

        return `${this.firstName} is a ${this.age} year old ${this.job}, and he has ${this.hasDriversLicence ? `a` : `no`} driver's licence.`;
    }
};

console.log(brian.calcAge()); // call function once
console.log(brian.age); // age is now saved as an object and can be called anytime
console.log(brian.age);
console.log(brian.age);

// Bracket Notation
// console.log(brian[`calcAge`]());

// Challenge
// `Brian is a 54 year old electrician, and he has a drivers licence`

console.log(brian.getSummary())
*/

// Iteration: The For Loop

// Instead of this
// console.log(`Lifting weights rep 1 🏋️‍♂️`);
// console.log(`Lifting weights rep 2 🏋️‍♂️`);
// console.log(`Lifting weights rep 3 🏋️‍♂️`);
// console.log(`Lifting weights rep 4 🏋️‍♂️`);
// console.log(`Lifting weights rep 5 🏋️‍♂️`);
// console.log(`Lifting weights rep 6 🏋️‍♂️`);
// console.log(`Lifting weights rep 7 🏋️‍♂️`);
// console.log(`Lifting weights rep 8 🏋️‍♂️`);
// console.log(`Lifting weights rep 9 🏋️‍♂️`);
// console.log(`Lifting weights rep 10 🏋️‍♂️`);
// We can create a for loop
// for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights rep ${rep} 🏋️‍♂️`);
}