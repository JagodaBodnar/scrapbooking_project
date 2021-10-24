import React from "react";
import styled, { keyframes } from "styled-components";
import bodyImg from "../../assets/images/imageMain.jpg";
import Fade from "react-reveal/Fade";
import withReveal from "react-reveal/withReveal";
import { device } from "../../globalStyles/Device";

export const StyledHomeContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: url(${bodyImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  @media ${device.tablet} {
    align-items: flex-end;
    padding-left: 5%;
  }
`;
export const StyledSpan = styled.span`
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
`;
export const StyledSpanSmall = styled.span`
  font-size: 30px;
  font-weight: 500;
  line-height: 50px;
  margin-bottom: 30px;
`;
export const StyledSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${device.mobile} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: 80%;
    flex-direction: row;
  }
  @media ${device.laptop} {
    width: 70%;
  }
  @media ${device.desktop} {
    width: 50%;
  }
`;

export const StyledDetailsSection = styled.div`
  flex: 7;
`;

export const bounce = keyframes`
   0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(15px);
  }
  40% {
    transform: translateY(0);
  }
`;

export const StyledRightContainer = withReveal(
  styled.div`
    margin-bottom: 20%;
    padding: 10px;
    @media ${device.tablet} {
      padding: 20px;
      display: flex;
    }
  `,
  <Fade right />
);
export const StyledSideInformation = styled.h3`
  color: ${({ theme }) => theme.textColor};
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const StyledInformationParagraphs = styled.p`
  display: flex;
  flex-direction: column;
`;
export const StyledSvg = styled.svg`
  height: 45px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const StyledRect = styled.rect``;
export const StyledButton = styled.button`
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  position: relative;
  width: 100%;
  padding: 12px 12px;
  font-size: 16px;
  font-weight: 500;
  font-family: "Roboto", "Helvetica", "Arial", "sans-serif";
  text-transform: uppercase;
  letter-spacing: 2px;
  background: transparent;
  border: none;
  &:hover ${StyledRect} {
    stroke-width: 3;
    stroke-dasharray: 48, 450;
    stroke-dashoffset: 48;
    stroke: ${({ theme }) => theme.white};
    @media ${device.tablet} {
      stroke: ${({ theme }) => theme.mainRed};
    }
  }
  &:hover {
    color: ${({ theme }) => theme.white};
    @media ${device.tablet} {
      color: ${({ theme }) => theme.mainRed};
    }
  }
  ${StyledRect} {
    fill: none;
    stroke: ${({ theme }) => theme.textColor};
    stroke-width: 3;
    stroke-dasharray: 422, 0;
    transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
  }
`;
