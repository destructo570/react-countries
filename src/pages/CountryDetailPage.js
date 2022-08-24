import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountryDetail from "../components/countryDetail/CountryDetail";
import countryData from "../fixture/countryData.json";
import { extractData, extractValues } from "../helpers/helper";
import { useNavigate } from "react-router-dom";

export default function CountryDetailPage() {
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  const borderClickHandler = (countryCode) => {
    const data = countryData.filter((item) => {
      return item.cca3 === countryCode;
    });
    navigate(`../countries/${data[0].name.common.toLowerCase()}`);
  };

  const backClickHandler = () => navigate(-1);

  useEffect(() => {
    const items = countryData.filter((item) => {
      return item.name.common.toLowerCase() === params.countryName;
    });

    const country = items[0];
    const filteredCountry = {
      countryName: country.name.common,
      flag: country.flags.png,
      nativeName:
        country.name.nativeName[Object.keys(country.name.nativeName)[0]]
          .official,
      population: country.population,
      region: country.region,
      subregion: country.subregion,
      tld: country.tld?.toString(),
      capital: country.capital.toString(),
      currencies: extractData(country.currencies, "name").toString(),
      languages: extractValues(country.languages).toString(),
      borderCountries: country.borders,
    };

    setCountry(filteredCountry);
  }, [params.countryName]);

  return (
    <CountryDetail
      country={country}
      onBorderClick={borderClickHandler}
      onBackClick={backClickHandler}
    />
  );
}
