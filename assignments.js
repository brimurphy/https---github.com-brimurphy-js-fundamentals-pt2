// 1: Functions
function describeCountry(country, population, capitalCity) {
    return (`${country} has ${population} million people and its capital city is ${capitalCity}.`);
}

const countryIreland = describeCountry("Ireland", 5, "Dublin");
const countryFinland = describeCountry("Finland", 6, "Helsinki");
const countryPortugal = describeCountry("Portugal", 12, "Lisbon");
// console.log(countryIreland);
// console.log(countryFinland);
// console.log(countryPortugal);

// 2: Function Declarations vs. Expressions

const worldPopulation = 7900;

// Function Declarations
function percentageOfWorld1(population) {
    return population / worldPopulation * 100;
}
// Function Expression
const percentageOfWorld2 = function (population) {
    return population / worldPopulation * 100;
}
const populationPercentIreland1 = percentageOfWorld1(5);
const populationPercentFinland1 = percentageOfWorld1(6);
const populationPercentPortugal1 = percentageOfWorld1(12);
const populationPercentIreland2 = percentageOfWorld2(5);
const populationPercentFinland2 = percentageOfWorld2(6);
const populationPercentPortugal2 = percentageOfWorld2(12)

console.log(populationPercentFinland1, populationPercentFinland2);
console.log(populationPercentIreland1, populationPercentIreland2);
console.log(populationPercentPortugal1, populationPercentPortugal2);