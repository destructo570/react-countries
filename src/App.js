import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HeaderWrapper from "./components/header/HeaderWrapper";
import CountryDetailPage from "./pages/CountryDetailPage";
import CountriesPage from "./pages/CountriesPage";

function App({ setIsDark }) {
  return (
    <HeaderWrapper setIsDark={setIsDark}>
      <Routes>
        <Route path="/" element={<Navigate replace to="/countries" />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/countries/:countryName" element={<CountryDetailPage />} />
      </Routes>
    </HeaderWrapper>
  );
}

export default App;
