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
// první část
// ---------------------------------------------------------------------------------------------------
function checkCountry(country, countries) {
  // ověření, zda je zadaná krajina platná
  if (typeof country !== "string" || country.length === 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}.`);
    return;
  }
  // zjištění indexu, na kterém se krajina nachází
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

// druhá část
// ------------------------------------------------------------------------------------------------------

function addCountry(country, countries) {
  // ověření, zda je zadaná krajina platná
  if (typeof country !== "string" || country.length === 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}.`);
    return;
  }

  // zjištění indexu, na kterém se krajina nachází
  const index = countries.indexOf(country);

  // krajina se již v seznamu nachází
  if (index !== -1) {
    console.log(
      `Zadaná krajina ${country} se nachází v seznamu krajin na indexu ${index}.`
    );
    return;
  }

  // přidání krajiny na konec seznamu
  countries.push(country);
  // zjištění nového indexu
  const newIndex = countries.indexOf(country);
  // zjištění počtu krajin v seznamu
  const numCountries = countries.length;
  console.log(
    `Zadaná krajina ${country} byla úspěšně přidána do seznamu krajin na indexu ${newIndex}. Celkový počet krajin v seznamu je ${numCountries}.`
  );
}

addCountry("Vietnam", countries);
addCountry("Mexico", countries);
addCountry("Poland", countries);
addCountry("", countries);

// třetí část
// ------------------------------------------------------------------------------------------
function removeCountry(country, countries) {
  // zkontrolujeme zda je zadaná krajina validní
  if (typeof country !== "string" || country.length === 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}.`);
    return;
  }

  // zjistíme, zda se krajina nachází v seznamu
  const index = countries.indexOf(country);
  if (index !== -1) {
    // krajina se nachází v seznamu, odstraníme ji
    countries.splice(index, 1);
    console.log(
      `Zadaná krajina ${country} byla odstraněná ze seznamu krajin na indexu ${index}. Aktuální počet krajin v seznamu je ${countries.length}.`
    );
  } else {
    // krajina se nenachází v seznamu
    console.log(`Zadaná krajina ${country} se nenachází v seznamu.`);
  }
}

removeCountry("", countries);
removeCountry("Vietnam", countries);
removeCountry("Laos", countries);
removeCountry("Thailand", countries);
