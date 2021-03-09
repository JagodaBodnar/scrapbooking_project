import React from "react";
import styled from "styled-components";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";

export const StyledSectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.sectionDarkBackground};
  margin: 100px auto;
`;
export const StyledSectionContainer = styled.div`
  min-height: 250px;
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
export const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
export const StyledAboutUs = withReveal(
  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 10px auto 40px auto;
    color: ${({ theme }) => theme.iconsBackground};
    text-align: center;
  `,
  <Fade bottom />
);
