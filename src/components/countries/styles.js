import styled from "@emotion/styled/macro";

export const CountryList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  @media (min-width: ${(props) => props.theme.media.small}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 400px));
    gap: 20px;
  }
`;

export const Item = styled.li``;
