import React from "react";
import {
  Container,
  Pane,
  Image,
  Title,
  Wrapper,
  InfoWrapper,
  MainWrapper,
  BorderList,
  BorderItem,
} from "./styles";
import backIcon from "../../assets/icons/arrow-left-line.svg";
import Button from "../form/button/Button";
import Card from "../../components/card/Card";

export default function CountryDetail({ country, onBorderClick, onBackClick }) {
  const borderListItems = country?.borderCountries?.map((item) => {
    return (
      <BorderItem key={item} onClick={onBorderClick.bind(null, item)}>
        {item}
      </BorderItem>
    );
  });

  return (
    <Container>
      <Button title="Back" icon={backIcon} onClick={onBackClick} />
      {country && (
        <MainWrapper>
          <Image src={country.flag} alt={country.countryName} />
          <Wrapper>
            <Title>{country.countryName}</Title>
            <InfoWrapper>
              <Pane direction="column" width="100%">
                <Card.InfoItem title="Native Name" data={country.nativeName} />
                <Card.InfoItem title="Population" data={country.population} />
                <Card.InfoItem title="Region" data={country.region} />
                <Card.InfoItem title="Sub Region" data={country.subregion} />
                <Card.InfoItem title="Capital" data={country.capital} />
              </Pane>
              <Pane direction="column" width="100%" marginMed="0 0 0 1em">
                <Card.InfoItem title="Top Level Domain" data={country.tld} />
                <Card.InfoItem title="Currencies" data={country.currencies} />
                <Card.InfoItem title="Languages" data={country.languages} />
              </Pane>
            </InfoWrapper>
            <Pane direction="column">
              <p>Border Countries: &nbsp;</p>
              <BorderList>{borderListItems}</BorderList>
            </Pane>
          </Wrapper>
        </MainWrapper>
      )}
    </Container>
  );
}
