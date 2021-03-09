import React from "react";
import styled, { keyframes } from "styled-components";
import bodyImg from "../../assets/images/image14.jpg";
import Fade from "react-reveal/Fade";
import withReveal from "react-reveal/withReveal";
import { FaAngleDown } from "react-icons/fa";
import { device } from "../../globalStyles/Device";

export const StyledHomeContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: url(${bodyImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const StyledSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  @media ${device.mobile} {
    width: 60%;
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
export const StyledCompanySection = styled.div`
  width: 100%;
  @media ${device.mobile} {
    font-size: 28px;
    width: 100%;
    flex: 8;
  }
`;
export const StyledDetailsSection = styled.div`
  flex: 7;
`;
export const StyledLeftContainer = withReveal(
  styled.div`
    background-color: ${({ theme }) => theme.whiteTransparent};
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${device.tablet} {
      padding: 20px;
    }
  `,
  <Fade left />
);
export const StyledLogo = styled.img`
  width: 70px;
  margin: 20px 0;
`;
export const StyledCompanyName = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.mainBlue};
  font-size: 30px;
  margin-bottom: 10%;
  text-align: center;
  @media ${device.tablet} {
    font-size: 38px;
    margin-bottom: 10%;
  }
`;
export const StyledCompanySubName = styled.span`
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.mainBlue};
  font-size: 20px;
  @media ${device.tablet} {
    font-size: 28px;
  }
`;
export const StyledCompanySubInfo = styled.h3`
  font-size: 16px;
  color: ${({ theme }) => theme.textColor};
  text-align: center;
  font-weight: 500;
  margin-bottom: 10%;
  @media ${device.tablet} {
    font-size: 22px;
    margin-bottom: 50px;
  }
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
export const StyledScrollDownButton = styled(FaAngleDown)`
  color: #2e92ee;
  font-size: 20px;
  animation: ${bounce} 2.5s linear infinite;
  cursor: pointer;
  &:hover {
    color: #292929;
  }
`;

export const StyledRightContainer = withReveal(
  styled.div`
    display: none;
    background-color: ${({ theme }) => theme.blueTransparent};
    padding: 10px;
    @media ${device.tablet} {
      padding: 50px;
      display: flex;
    }
  `,
  <Fade bottom />
);
export const StyledSideInformation = styled.h3`
  color: ${({ theme }) => theme.textColor};
  font-weight: 400;
`;

export const StyledInformationParagraphs = styled.p`
  margin: 8px 0;
  line-height: 1.5rem;
  font-size: 14px;
  @media ${device.tablet} {
    font-size: 16px;
  }
`;
