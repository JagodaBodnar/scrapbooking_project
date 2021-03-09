import React from "react";
import styled, { css } from "styled-components";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";
import { device } from "../../globalStyles/Device";

export const StyledIconsContainer = withReveal(
  styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 55px;
    @media ${device.mobileS} {
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 20px;
    } ;
  `,
  <Fade left />
);
export const StyledIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledOfferIcon = styled.button`
  width: 120px;
  height: 120px;
  border: ${({ theme }) => `2px solid ${theme.iconsBorder}`};
  background-color: ${({ theme }) => theme.iconsBackground};
  border-radius: 50%;
  cursor: pointer;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: 70px;
  background-repeat: no-repeat;
  outline: none;
  transition: 0.8s;
  ${({ isCollapsed }) =>
    isCollapsed &&
    css`
      border: ${({ theme }) => `2px solid ${theme.mainBlue}`};
      background-color: ${({ theme }) => theme.mainBlue};
    `}
  &:hover {
    border: ${({ theme }) => `2px solid ${theme.mainBlue}`};
  }
`;

export const StyledDetailsWrapper = withReveal(
  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    width: 100%;
  `,
  <Fade bottom />
);
export const StyledDetailsContainer = styled.div`
  width: 100%;
`;

export const StyledShowDetails = styled.div`
  text-align: center;
  min-height: 120px;
  display: none;
  width: 80%;
  font-size: 16px;
  transition: 0.5s;
  color: ${({ theme }) => theme.iconsBackground};
  ${({ isCollapsed }) =>
    isCollapsed &&
    css`
      display: flex;
      flex-direction: column;
    `}
`;
export const StyledDetailsParagraph = styled.p`
  margin-bottom: 5px;
`;
