import styled from "@emotion/styled/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  max-width: ${(props) => props.theme.media.large};
  margin: 0 auto;
  @media (min-width: ${(props) => props.theme.media.medium}) {
    justify-content: space-between;
    flex-direction: column;
  }
`;

export const InfoTitle = styled.p`
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

export const InfoData = styled.p`
  margin: 0;
  padding: 0;
`;

export const Pane = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : ""};
  padding: ${({ padding }) => (padding ? padding : 0)};
  margin: ${({ margin }) => (margin ? margin : 0)};
  width: ${({ width }) => (width ? width : "auto")};

  margin-md @media (min-width: ${(props) => props.theme.media.medium}) {
    margin: ${({ marginMed }) => (marginMed ? marginMed : 0)};
  }
`;

export const Title = styled.h1`
  @media (min-width: ${(props) => props.theme.media.medium}) {
    display: block;
  }
`;

export const Image = styled.img`
  max-width: 500px;
  @media (min-width: ${(props) => props.theme.media.medium}) {
    width: 40%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.media.medium}) {
    width: 55%;
    margin: 1em;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.media.medium}) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

export const BorderList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
`;

export const BorderItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.75em;
  margin: 0.5em;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: 0.8rem;
  cursor: pointer;
  & + & {
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.media.medium}) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;
