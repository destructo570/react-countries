import React from "react";
import styled from "@emotion/styled/macro";
import { useNavigate } from "react-router-dom";

const StyledHeading = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
  div {
    padding: 1em;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
  }
`;

export const NotFound = () => {
  const navigate = useNavigate();
  const goHomeHandler = () => navigate("../countries");
  return (
    <StyledHeading>
      <h1>404 Page Not Found</h1>
      <div onClick={goHomeHandler}>Go Home</div>
    </StyledHeading>
  );
};
