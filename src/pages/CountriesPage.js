import React, { useState, useEffect, useMemo } from "react";
import Countries from "../components/countries/Countries";
import DropDown from "../components/form/dropDown/DropDown";
import Search from "../components/search/Search";
import countriesData from "../fixture/countryData.json";

const DummyFilter = ["None", "Africa", "America", "Asia", "Europe", "Oceania"];
export default function CountriesPage() {
  const [countries, setCountries] = useState(countriesData);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [searchInput, setSearchInput] = useState("");
  const [filterInput, setFilterInput] = useState("");

  useEffect(() => {
    // console.log("1");
    // console.log(filterInput);
    // let result = "";
    // if (!searchInput && !filterInput) {
    //   result = countries;
    // } else {
    //   result = countries.filter((item) => {
    //     const countryName = item.name.common.toLowerCase();
    //     const regionName = item.region.toLowerCase();
    //     const inputValue = searchInput.toLowerCase();
    //     const filterValue = filterInput.toLowerCase();
    //     if (!searchInput) {
    //       return regionName === filterValue;
    //     } else {
    //       console.log("here");
    //       return countryName.indexOf(inputValue);
    //     }
    //   });
    // }
    // setFilteredCountries(result);
  }, [searchInput, filterInput, countries]);

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
