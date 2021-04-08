function describeCountry(country, population, capitalCity) {
    return (`${country} has ${population} million people and its capital city is ${capitalCity}.`);
}

const countryIreland = describeCountry("Ireland", 5, "Dublin");
const countryFinland = describeCountry("Finland", 6, "Helsinki");
const countryPortugal = describeCountry("Portugal", 12, "Lisbon");
console.log(countryIreland);
console.log(countryFinland);
console.log(countryPortugal);