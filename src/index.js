import { Global, ThemeProvider } from "@emotion/react";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { darkTheme, lighTheme } from "./theme/default";
import globalStyles from "./theme/global";
import { BrowserRouter } from "react-router-dom";
import { getUserThemePref, setUserThemePref } from "./helpers/helper";

function Root() {
  const [isDark, setIsDark] = useState(getUserThemePref());
  const setIsDarkHandler = () => {
    setIsDark((prev) => {
      setUserThemePref(!prev);
      return !prev;
    });
  };
  return (
    <ThemeProvider theme={isDark ? darkTheme : lighTheme}>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <App isDark={isDark} setIsDark={setIsDarkHandler} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
