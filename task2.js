const countriesPopulation = [
  { country: "China", population: 1439323776 },
  { country: "India", population: 1379302771 },
  { country: "USA", population: 331002651 },
  { country: "Indonesia", population: 269603400 },
  { country: "Pakistan", population: 220892340 },
  { country: "Bangladesh", population: 164970459 },
  { country: "Japan", population: 126451398 },
  { country: "Philippines", population: 109581078 },
  { country: "Vietnam", population: 97338579 },
  { country: "Turkey", population: 84339642 },
];
const populationTotal = 8000000000;

// Obecná funkce pro výpočet procenta
function percentageOfPopulation(population, totalPopulation) {
  return Number(((population / totalPopulation) * 100).toFixed(2));
}

// Test China
const china = countriesPopulation.find(
  (country) => country.country === "China"
);
const chinaPercentage = percentageOfPopulation(
  china.population,
  populationTotal
);

if (chinaPercentage === 17.99) {
  console.log(`Test je úspěšný a výsledek je ${chinaPercentage}`);
} else {
  console.log(
    `Test neprošel. Očekáváno je 17.99, ale výsledek ${chinaPercentage}.`
  );
}

// Kopírování pole
const copyCountries = [...countriesPopulation];

// Vytvoření kopie pole pomocí metody slice()
const sortedCountries = copyCountries.slice();

// Seřazení pole na základě počtu populace od nejmenšího po největší
sortedCountries.sort((a, b) => a.population - b.population);

// nová vlastnost ID, která se skládá z prvních 3 písmen země a doplněná o index
const updatedCountriesPopulation = sortedCountries.map((country, index) => {
  const id = country.country.slice(0, 3) + index;
  return {
    ...country,
    id,
  };
});

// doplnění procentuálního podílu dané země na celkové populaci na zeměkouli
const countriesPopulationPercentage = sortedCountries.map((country, index) => {
  const percentage = percentageOfPopulation(
    country.population,
    populationTotal
  );
  const id = country.country.slice(0, 3) + index;
  return {
    ...country,
    id,
    percentage,
  };
});

// nové pole, kde je název větší než 4 znaky, ale není menší než 8. Percentage je větší než 1,5, ale menší než 10.
const filteredCountriesPopulationPercentage =
  countriesPopulationPercentage.filter(
    (country) =>
      country.country.length > 4 &&
      country.country.length <= 8 &&
      country.percentage > 1.5 &&
      country.percentage < 10
  );

console.log(filteredCountriesPopulationPercentage);
