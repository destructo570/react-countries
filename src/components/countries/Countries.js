import React from "react";
import { useNavigate } from "react-router-dom";
import { CountryList } from "./styles";
import Card from "../card/Card";
import { Item } from "./styles";
export default function Countries(props) {
  const navigate = useNavigate();

  const onCountryClickHandler = (country) => {
    navigate(`/countries/${country}`);
  };

  return (
    <CountryList>
      {props.dataSource.map((item) => {
        return (
          <Item
            key={item.name.common}
            onClick={onCountryClickHandler.bind(
              null,
              item.name.common.toLowerCase()
            )}
          >
            <Card direction="column" minHeight="400px" maxWidth="300px">
              <Card.Image src={item.flags.png} borderRadius="8px 8px 0px 0px" />
              <Card.Pane padding="1em" direction="column">
                <Card.Title>{item.name.common}</Card.Title>
                <Card.InfoItem title="Population" data={item.population} />
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
