import React from "react";
import HeaderWrapper from "./components/header/HeaderWrapper";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <HeaderWrapper>
        <Home />
      </HeaderWrapper>
    </div>
  );
}

export default App;
