import React from "react";
import { Pane } from "./styles";

export default function Wrapper({ children, ...rest }) {
  return <Pane {...rest}>{children}</Pane>;
}
