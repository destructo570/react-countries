import React from "react";
import { Item } from "./styles";
import Card from "../card/Card";
export default function CountryListItem(props) {
  return (
    <Item>
      <Card direction="column" minHeight="400px">
        <Card.Image
          src={props.country.flags.png}
          borderRadius="8px 8px 0px 0px"
        />
        <Card.Pane padding="1em" direction="column">
          <Card.Title>{props.country.name.common}</Card.Title>
          <Card.InfoItem title="Population" data={props.country.population} />
          <Card.InfoItem title="Region" data={props.country.region} />
          <Card.InfoItem title="Capital" data={props.country.capital} />
        </Card.Pane>
      </Card>
    </Item>
  );
}
