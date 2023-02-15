const countries = [
  "United States",
  "China",
  "India",
  "Indonesia",
  "Brazil",
  "Pakistan",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Philippines",
  "Vietnam",
  "Ethiopia",
  "Egypt",
  "Iran",
  "Turkey",
  "Democratic Republic of the Congo",
  "Thailand",
  "Myanmar",
];

function checkCountry(country, countries) {
  if (typeof country !== "string" || country.length === 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}.`);
    return;
  }
  const index = countries.indexOf(country);
  if (index !== -1) {
    console.log(
      `Zadaná krajina ${country} se nachází v seznamu krajin na indexu ${index}.`
    );
  } else {
    console.log(`Zadaná krajina ${country} se nenachází v seznamu krajin.`);
  }
}

checkCountry("Germany", countries);
checkCountry("Japan", countries);
checkCountry(1000, countries);
