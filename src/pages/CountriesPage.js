import React, { useState, useEffect } from "react";
import Countries from "../components/countries/Countries";
import DropDown from "../components/form/dropDown/DropDown";
import Search from "../components/search/Search";
import { REGION_FILTER } from "../constants/contansts";
import { filterCountryList } from "../helpers/helper";

export default function CountriesPage({ countries }) {
  const [searchInput, setSearchInput] = useState("");
  const [filterInput, setFilterInput] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const result = filterCountryList(countries, searchInput, filterInput);
    setFilteredCountries(result);
  }, [searchInput, filterInput, countries]);

  const onInputChange = (event) => setSearchInput(event.target.value);
  const onFilterChange = (value) => setFilterInput(value);

  return (
    <>
      <Search onInputChange={onInputChange} />
      <DropDown dataSource={REGION_FILTER} onFilterChange={onFilterChange} />
      <Countries countries={filteredCountries} />
    </>
  );
}
