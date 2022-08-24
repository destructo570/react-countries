import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HeaderWrapper from "./components/header/HeaderWrapper";
import CountryDetailPage from "./pages/CountryDetailPage";
import CountriesPage from "./pages/CountriesPage";
import axios from "axios";

function App({ setIsDark }) {
  const [countries, setCountries] = useState(null);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <HeaderWrapper setIsDark={setIsDark}>
      <Routes>
        <Route path="/" element={<Navigate replace to="/countries" />} />
        <Route
          path="/countries"
          element={<CountriesPage countries={countries} />}
        />
        <Route
          path="/countries/:countryName"
          element={<CountryDetailPage dataSource={countries} />}
        />
      </Routes>
    </HeaderWrapper>
  );
}

export default App;
