import React from "react";
import { Wrapper, Title, ThemeSwitcher } from "./styles";
import moonIcon from "../../assets/icons/moon.svg";
import sunIcon from "../../assets/icons/sun-fill.svg";
import { getUserThemePref } from "../../helpers/helper";

export default function Header({ setIsDark }) {
  const themeSwitchHandler = () => setIsDark((prev) => !prev);
  const themeIcon = getUserThemePref() ? moonIcon : sunIcon;
  const themeString = getUserThemePref() ? "Dark Mode" : "Light Mode";
  return (
    <Wrapper>
      <Title>Where in the world?</Title>
      <ThemeSwitcher onClick={themeSwitchHandler}>
        <img src={themeIcon} alt="" />
        <p>{themeString}</p>
      </ThemeSwitcher>
    </Wrapper>
  );
}
