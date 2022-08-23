import React from "react";
import { Wrapper, Title, ThemeSwitcher } from "./styles";
import moonIcon from "../../assets/icons/moon.svg";

export default function Header() {
  return (
    <Wrapper>
      <Title>Where in the world?</Title>
      <ThemeSwitcher>
        <img src={moonIcon} alt="" />
        <p>Dark Mode</p>
      </ThemeSwitcher>
    </Wrapper>
  );
}
