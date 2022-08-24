import styled from "@emotion/styled/macro";

export const Image = styled.img``;

export const SearchInput = styled.input`
  color: ${(props) => props.theme.colors.textPrimary};
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  margin-left: 1em;
  font-family: "Open Sans", "sans-serif";

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) => props.theme.colors.textPrimary};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${(props) => props.theme.colors.textPrimary};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;
