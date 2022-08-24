import styled from "@emotion/styled/macro";

export const Container = styled.div`
  cursor: pointer;
  max-width: 230px;
`;
export const Pane = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.colors.shadow} 0px 7px 29px 0px;
  border-radius: 8px;
  padding: 0 1em;
  margin: ${({ margin }) => margin};
  justify-content: ${({ justify }) => justify};
  position: relative;
`;
export const CurrentItem = styled.p``;
export const DropDownList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.colors.shadow} 0px 7px 29px 0px;
  border-radius: 8px;
  padding: 0 1em;
  margin: 0em 1em 1em 1em;
  justify-content: ${({ justify }) => justify};
  position: absolute;
  min-width: 200px;
`;
export const DropDownItem = styled.p``;
export const Image = styled.img``;
