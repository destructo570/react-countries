import React from "react";
import CountryListItem from "./CountryListItem";
import { CountryList } from "./styles";
export default function Countries(props) {
  const listOfCountries = props.dataSource.map((item) => {
    return <CountryListItem key={item.name.common} country={item} />;
  });
  return <CountryList>{listOfCountries}</CountryList>;
}
