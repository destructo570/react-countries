import React, { useState } from "react";
import {
  Container,
  DropDownList,
  DropDownItem,
  Pane,
  CurrentItem,
  Image,
} from "./styles";
import dropIconLight from "../../../assets/icons/arrow-drop-down-light.svg";
import dropIconDark from "../../../assets/icons/arrow-drop-down-dark.svg";
import { getUserThemePref } from "../../../helpers/helper";

export default function DropDown(props) {
  const [value, setValue] = useState("Filter By Region");
  const [clickState, setClickState] = useState(false);
  const { dataSource } = props;
  const isDark = getUserThemePref();

  const onClickHandler = () => {
    setClickState((prev) => !prev);
  };

  const onItemClickHandler = (e) => {
    setValue(e.target.innerText);
    props.onFilterChange(e.target.innerText);
    setClickState((prev) => !prev);
  };

  return (
    <Container>
      <Pane
        direction="row"
        justify="space-between"
        margin="1em 1em 0.5em 1em"
        onClick={onClickHandler}
      >
        <CurrentItem>{value}</CurrentItem>
        <Image src={isDark ? dropIconLight : dropIconDark} alt="" />
      </Pane>
      {clickState && (
        <DropDownList>
          {dataSource.map((item) => {
            return (
              <DropDownItem key={item} onClick={onItemClickHandler}>
                {item}
              </DropDownItem>
            );
          })}
        </DropDownList>
      )}
    </Container>
  );
}
