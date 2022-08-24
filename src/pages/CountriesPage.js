import React, { useState, useEffect, useMemo, useCallback } from "react";
import Countries from "../components/countries/Countries";
import DropDown from "../components/form/dropDown/DropDown";
import Search from "../components/search/Search";
import countriesData from "../fixture/countryData.json";
import { debounce } from "../helpers/helper";
const DummyFilter = ["None", "Africa", "Americas", "Asia", "Europe", "Oceania"];
export default function CountriesPage() {
  const [countries, setCountries] = useState(countriesData);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [searchInput, setSearchInput] = useState("");
  const [filterInput, setFilterInput] = useState("");

  useEffect(() => {
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
        console.log("Runnin...");
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
    setFilteredCountries(result);
  }, [searchInput, filterInput, countries]);

  // const filterHandler = () => {
  //   let result = "";
  //   if (!searchInput && !filterInput) {
  //     result = countries;
  //   } else {
  //     result = countries.filter((item) => {
  //       const countryName = item.name.common.toLowerCase();
  //       const regionName = item.region.toLowerCase();
  //       const inputValue = searchInput.toLowerCase();
  //       const filterValue = filterInput.toLowerCase();
  //       console.log("Runnin...");
  //       if (!searchInput) {
  //         return regionName === filterValue;
  //       } else if (!filterInput || filterValue === "none") {
  //         return countryName.indexOf(inputValue) === 0;
  //       } else {
  //         return (
  //           regionName === filterValue && countryName.indexOf(inputValue) === 0
  //         );
  //       }
  //     });
  //   }
  //   setFilteredCountries(result);
  // };
  // const debouncedFilterHandler = useCallback(debounce(filterHandler, 1000), []);

  // useEffect(debouncedFilterHandler, [searchInput, filterInput, countries]);

  // const debouncedFilterHandler = useMemo(
  //   useCallback(debounce(filterHandler, 1000), []),
  //   [searchInput, filterInput, countries]
  // );

  const onInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onFilterChange = (value) => {
    setFilterInput(value);
  };
  return (
    <>
      <Search onInputChange={onInputChange} />
      <DropDown dataSource={DummyFilter} onFilterChange={onFilterChange} />
      <Countries dataSource={filteredCountries} />
    </>
  );
}
