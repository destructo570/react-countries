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
    transition-duration: 0.2s;
    transition-property: background-color, color;
    font-family: "Open Sans", "Sans-serif";
    color: ${theme.colors.textPrimary};
  }
`;

export default globalStyles;
