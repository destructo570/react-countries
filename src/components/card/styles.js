import styled from "@emotion/styled/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "")};
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ alignitems }) => (alignitems ? alignitems : "")};
  padding: ${({ padding }) => (padding ? padding : 0)};
  margin: ${({ margin }) => (margin ? margin : 0)};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.colors.shadow} 0px 7px 29px 0px;

  &:hover {
    cursor: pointer;
  }

  min-height: ${({ minHeight }) => (minHeight ? minHeight : "")};
`;

export const Title = styled.h3`
  font-size: 1.5rem;
`;

export const SubTitle = styled.h4``;

export const InfoTitle = styled.p`
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

export const InfoData = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 300;
`;

export const Pane = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "")};
  padding: ${({ padding }) => (padding ? padding : 0)};
  margin: ${({ margin }) => (margin ? margin : 0)};
`;

export const Image = styled.img`
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "")};
  object-fit: cover;

  @media (min-width: ${(props) => props.theme.media.medium}) {
    max-height: ${({ maxHeightMd }) => (maxHeightMd ? maxHeightMd : "")};
  }
`;
