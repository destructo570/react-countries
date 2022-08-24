import React from "react";
import {
  Container,
  Title,
  SubTitle,
  Image,
  Pane,
  InfoTitle,
  InfoData,
} from "./styles";

export default function Card({
  children,
  direction,
  justify,
  alignItems,
  ...restProps
}) {
  return (
    <Container
      direction={direction}
      justify={justify}
      alignItems={alignItems}
      {...restProps}
    >
      {children}
    </Container>
  );
}

Card.Pane = function CardPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.InfoItem = function CardInfoItem({ title, data, ...restProps }) {
  return (
    <Pane direction="row" {...restProps} margin="0 0 0.5em 0">
      <InfoTitle>{title + ":"}&nbsp;</InfoTitle>
      <InfoData>{data}</InfoData>
    </Pane>
  );
};

Card.Image = function CardImage({
  borderRadius,
  children,
  src,
  alt,
  ...restProps
}) {
  return (
    <Image src={src} alt={alt} borderRadius={borderRadius} {...restProps}>
      {children}
    </Image>
  );
};
