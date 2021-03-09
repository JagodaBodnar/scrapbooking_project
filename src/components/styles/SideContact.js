import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import withReveal from "react-reveal/withReveal";

export const StyledSideContactContainer = withReveal(
  styled.div`
    margin-top: 90px;
  `,
  <Fade left />
);

export const StyledSideContactHeader = styled.h3`
  text-transform: uppercase;
`;
export const StyledSideContactCompanyName = styled.h3`
  color: #888;
  font-weight: 400;
`;
export const StyledSideContactAddress = styled.p`
  color: #888;
  font-weight: 300;
`;

export const StyledBottomContactAddress = styled.div`
  margin-top: 30px;
`;
export const StyledMailPhone = styled.span`
  color: #2e92ee;
  margin-left: 3px;
  cursor: pointer;
`;
