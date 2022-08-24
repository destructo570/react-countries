import React from "react";
import { useNavigate } from "react-router-dom";
import { CountryList } from "./styles";
import Card from "../card/Card";
import { Item } from "./styles";
export default function Countries({ countries }) {
  const navigate = useNavigate();
  const onCountryClickHandler = (country) => {
    navigate(`/countries/${country.name.common.toLowerCase()}`);
  };
  return (
    <CountryList>
      {countries?.map((item) => {
        return (
          <Item
            key={item.name.common}
            onClick={onCountryClickHandler.bind(null, item)}
          >
            <Card direction="column" minHeight="400px" maxWidth="300px">
              <Card.Image
                src={item.flags.png}
                borderRadius="8px 8px 0px 0px"
                maxHeight="200px"
                maxHeightMd="150px"
              />
              <Card.Pane padding="1em" direction="column">
                <Card.Title>{item.name.common}</Card.Title>
                <Card.InfoItem
                  title="Population"
                  data={item.population.toLocaleString("en-US")}
                />
                <Card.InfoItem title="Region" data={item.region} />
                <Card.InfoItem title="Capital" data={item.capital} />
              </Card.Pane>
            </Card>
          </Item>
        );
      })}
    </CountryList>
  );
}
