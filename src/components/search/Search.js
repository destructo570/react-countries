import React from "react";
import Card from "../card/Card";
import searchIcon from "../../assets/icons/search-line.svg";
import { Image, SearchInput } from "./styles";

export default function Search(props) {
  return (
    <Card direction="row" justify="space-between" padding="1em" margin="0 1em">
      <Image src={searchIcon} alt="" />
      <SearchInput
        type="text"
        placeholder="Search for a country..."
        onChange={props.onInputChange}
      />
    </Card>
  );
}
