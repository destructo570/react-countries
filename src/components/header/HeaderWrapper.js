import React from "react";
import Header from "./Header";

export default function HeaderWrapper(props) {
  return (
    <>
      <Header setIsDark={props.setIsDark} />
      {props.children}
    </>
  );
}
