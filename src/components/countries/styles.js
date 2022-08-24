import styled from "@emotion/styled/macro";

export const CountryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1em;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.media.small}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 3em;
  }
`;

export const Item = styled.li``;
