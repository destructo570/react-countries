import React from "react";
import Countries from "../components/countries/Countries";
import DropDown from "../components/form/dropDown/DropDown";
import Search from "../components/search/Search";
import countriesData from "../fixture/countryData.json";

const DummyFilter = ["Africa", "America", "Asia", "Europe", "Oceania"];
export default function Home() {
  return (
    <>
      <Search />
      <DropDown dataSource={DummyFilter} />
      <Countries dataSource={countriesData} />
    </>
  );
}
