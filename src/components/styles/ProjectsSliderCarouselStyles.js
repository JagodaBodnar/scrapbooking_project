import styled, { css } from "styled-components";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import { device } from "../../globalStyles/Device";

export const StyledSliderContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.darkBackground};
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledSliderWrap = styled.div`
  width: 80%;
  margin: 0 auto;
  @media ${device.laptop} {
    width: 100%;
  }
  @media ${device.desktop} {
    width: 80%;
  }
`;
export const StyledImg = styled.img`
  min-height: 100px;
  width: 100%;
  z-index: 100;
`;

export const StyledProjectsInnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledInnerSlider = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
`;
export const StyledProjectsParagraphContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.mobileMenuBorder};
  border-bottom: ${({ theme }) => `5px solid ${theme.mainBlue}`};
  position: relative;
  display: ${({ isCollapsed }) => (isCollapsed ? "none" : "block")};
`;
export const StyledProjectsParagraph = styled.p`
  color: ${({ theme }) => theme.iconsBorder};
  font-size: 12px;
`;
export const StyledProjectsTitle = styled.h4`
  font-weight: 500;
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
`;
export const StyledRevealButton = styled.button`
  position: absolute;
  width: 35px;
  height: 35px;
  background-color: ${({ theme }) => theme.mobileMenuBorder};
  border-radius: 50%;
  border: none;
  outline: none;
  top: -10%;
  left: 80%;
  cursor: pointer;
  z-index: 101;
`;
export const StyledOpenDetailsIcons = styled(FiArrowDownCircle)`
  font-size: 30px;
  color: ${({ theme }) => theme.white};
  padding: 5px;
`;
export const StyledCloseDetailsIcons = styled(FiArrowUpCircle)`
  font-size: 30px;
  color: ${({ theme }) => theme.white};
  padding: 5px;
`;

export const StyledRevealContainer = styled.div`
  flex-direction: column;
  width: 100%;
  height: 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-100%);
  ${({ isCollapsed }) =>
    isCollapsed &&
    css`
      height: 100%;
      opacity: 1;
      visibility: visible;
      transition: 0.7s;
      transform: translateY(0%);
    `}
`;
export const StyledProjectsParagraphCopy = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.mobileMenuBorder};
  border-bottom: ${({ theme }) => `5px solid ${theme.mainBlue}`};
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-100%);
  ${({ isCollapsed }) =>
    isCollapsed &&
    css`
      height: 100%;
      opacity: 1;
      visibility: visible;
      transition: 0.7s;
      transform: translateY(0%);
    `}
`;

export const StyledImgReveal = styled(StyledImg)`
  border: ${({ theme }) => `5px solid ${theme.mobileMenuBorder}`};
  width: 100%;
  border-bottom: none;
  height: auto;
`;
