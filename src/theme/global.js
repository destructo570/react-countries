import { css } from "@emotion/react";
import normalize from "normalize.css";
const globalStyles = (theme) => css`
  ${normalize}
  * {
    box-sizing: border-box;
  }
  html,
  body {
    background-color: ${theme.colors.background};
    font-family: "Open Sans", "Sans-serif";
    color: white;
  }
`;

export default globalStyles;
