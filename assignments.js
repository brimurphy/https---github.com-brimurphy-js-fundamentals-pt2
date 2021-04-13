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

// console.log(populationPercentFinland1, populationPercentFinland2);
// console.log(populationPercentIreland1, populationPercentIreland2);
// console.log(populationPercentPortugal1, populationPercentPortugal2);

// 3: Arrow Functions

const percentageOfWorld3 = population => population / worldPopulation * 100;

const populationPercentIreland3 = percentageOfWorld3(5);
const populationPercentFinland3 = percentageOfWorld3(6);
const populationPercentPortugal3 = percentageOfWorld3(12);

// console.log(populationPercentFinland3, populationPercentIreland3, populationPercentPortugal3);

// 4: Functions Calling Other Functions

function describePopulation(country, population) {
    const percentageOfWorldPopulation = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentageOfWorldPopulation}% of the world population.`;
}
const describeIreland = describePopulation("Ireland", 5);
const describeFinland = describePopulation("Finland", 6);
const describePortugal = describePopulation("Portugal", 12)
// console.log(describeFinland);
// console.log(describeIreland);
// console.log(describePortugal);
