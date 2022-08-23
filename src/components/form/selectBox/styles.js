import styled from "@emotion/styled/macro";

export const Select = styled.select`
  padding: 0.5em 1em;
  background-color: ${(props) => props.theme.colors.primary};
  outline: none;
  border: none;
  border-radius: 8px;
  width: 100%;
  margin: 0 1em;
`;
