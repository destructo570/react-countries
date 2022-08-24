export const extractData = (object, property) => {
  const arr = [];
  for (let key in object) {
    arr.push(object[key][property]);
  }
  return arr;
};

export const extractValues = (object) => {
  const arr = [];
  for (let key in object) {
    arr.push(object[key]);
  }
  return arr;
};

export const getUserThemePref = () => {
  const theme = localStorage.getItem("theme");
  if (theme !== null) {
    return theme === "false" ? false : true;
  } else {
    return setUserThemePref(false);
  }
};

export const setUserThemePref = (value) => {
  localStorage.setItem("theme", value);
  return value;
};

export const debounce = (fn, delay) => {
  let timer;
  return function () {
    let context = this,
      args = arguments;

    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

export const filterCountryList = (countries, searchInput, filterInput) => {
  if (!countries) return;
  let result = "";
  if (
    (!searchInput && !filterInput) ||
    (!searchInput && filterInput.toLowerCase() === "none")
  ) {
    result = countries;
  } else {
    result = countries.filter((item) => {
      const countryName = item.name.common.toLowerCase();
      const regionName = item.region.toLowerCase();
      const inputValue = searchInput.toLowerCase();
      const filterValue = filterInput.toLowerCase();

      if (!searchInput) {
        return regionName === filterValue;
      } else if (!filterInput || filterValue === "none") {
        return countryName.indexOf(inputValue) === 0;
      } else {
        return (
          regionName === filterValue && countryName.indexOf(inputValue) === 0
        );
      }
    });
  }
  return result;
};

export const getFilteredCountry = (countries, countryName) => {
  const items = countries.filter((item) => {
    return item.name.common.toLowerCase() === countryName;
  });

  const country = items[0];

  const filteredCountry = {
    countryName: country.name.common,
    flag: country.flags.png,
    nativeName: extractData(country.name.nativeName, "official").toString(),
    population: country.population.toLocaleString("en-US"),
    region: country.region,
    subregion: country.subregion,
    tld: country.tld?.toString(),
    capital: country.capital.toString(),
    currencies: extractData(country.currencies, "name").toString(),
    languages: extractValues(country.languages).toString(),
    borderCountries: country.borders,
  };
  return filteredCountry;
};
