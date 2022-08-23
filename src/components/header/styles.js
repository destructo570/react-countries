import styled from "@emotion/styled/macro";

export const Wrapper = styled.header`
  padding: 1em;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
`;

export const ThemeSwitcher = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  p {
    margin-left: 0.75em;
  }
`;
