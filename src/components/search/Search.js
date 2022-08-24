import React from "react";
import Card from "../card/Card";
import searchIconLight from "../../assets/icons/search-light.svg";
import searchIconDark from "../../assets/icons/search-dark.svg";
import { Image, SearchInput } from "./styles";
import { getUserThemePref } from "../../helpers/helper";

export default function Search(props) {
  const isDark = getUserThemePref();
  return (
    <Card direction="row" justify="space-between" padding="1em" margin="0 1em">
      <Image src={isDark ? searchIconLight : searchIconDark} alt="" />
      <SearchInput
        type="text"
        placeholder="Search for a country..."
        onChange={props.onInputChange}
      />
    </Card>
  );
}
