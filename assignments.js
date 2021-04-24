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

// 5: Introduction to Arrays

const populations = [5, 6, 12, 1398];
// console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]),
percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2]),
percentageOfWorld1(populations[populations.length - 1])];

// console.log(percentages);

// 5: Basic Array Operations(Methods)

const neighbours = [`Netherlands`, `Germany`, `Luxembourg`, `France`];

neighbours.push(`Utopia`);
// console.log(neighbours);
neighbours.pop();
// console.log(neighbours);

// if (neighbours.includes(`Germany`)) {
//     console.log(`Probably is a central European country 😁`);
// } else {
//     console.log(`Probably not a central European country 😁`);
// }

const newName = neighbours.indexOf(`Luxembourg`)
// console.log(newName);
neighbours[2] = `Grand Duchy of Luxembourg`;
// console.log(neighbours);

// 6: Introduction to Objects

// const myCountry = {
//     country: `Ireland`,
//     capital: `Dublin`,
//     language: `English`,
//     population: 5,
//     neighbours: [`Wales`, `Northern Ireland`, `England`, `Scotland`]
// };

// 7: Dot vs. Bracket Notation

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital city called ${myCountry.capital}`);

// myCountry.population = 7;
// console.log(myCountry.population);
// myCountry[`population`] = 5;
// console.log(myCountry.population);

// 8: Object Methods

const myCountry = {
    country: `Ireland`,
    capital: `Dublin`,
    language: `English`,
    population: 5,
    neighbours: [`Wales`, `Northern Ireland`, `England`, `Scotland`],
    describe: function () {
        return `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital city called ${this.capital}!`;
    },
    checkIsland: function () {
        this.isIsland = `${this.neighbours.length === 0 ? true : false}`;
        return this.isIsland;
    }
};

// console.log(myCountry.describe());
// console.log(myCountry.checkIsland());

// 9: Iteration: The For Loop

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
}