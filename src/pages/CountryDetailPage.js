import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountryDetail from "../components/countryDetail/CountryDetail";
import { getFilteredCountry } from "../helpers/helper";
import { useNavigate } from "react-router-dom";

export default function CountryDetailPage({ dataSource }) {
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  const borderClickHandler = (countryCode) => {
    const data = dataSource?.filter((item) => item.cca3 === countryCode);
    navigate(`../countries/${data[0].name.common.toLowerCase()}`);
  };

  const backClickHandler = () => navigate("../countries");

  useEffect(() => {
    if (!dataSource) return;
    const result = getFilteredCountry(dataSource, params.countryName);
    console.log(result);
    if (!result) navigate(`../404`);
    setCountry(result);
  }, [params.countryName, dataSource, navigate]);

  return (
    <CountryDetail
      country={country}
      onBorderClick={borderClickHandler}
      onBackClick={backClickHandler}
    />
  );
}
