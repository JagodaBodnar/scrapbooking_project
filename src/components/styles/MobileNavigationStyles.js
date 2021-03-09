import styled from "styled-components";
import { Link } from "react-scroll";

export const StyledSpan = styled.span`
  display: block;
  width: 30px;
  height: 2px;
  margin-bottom: 5px;
  position: relative;
  background: ${({ isMenuOpen, theme }) =>
    isMenuOpen ? theme.mainBlue : theme.textColor};
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    opacity 0.55s ease;
`;

export const StyledHamburger = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  z-index: 1;
  margin: 5px 20px 0 0;
  cursor: pointer;
  z-index: 1000;
  ${StyledSpan}:first-child {
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "rotate(45deg) translate(-1px, 0px)" : ""};
  }
  ${StyledSpan}:last-child {
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "rotate(-45deg) translate(-2px, -1px)" : ""};
  }
  ${StyledSpan}:nth-child(2) {
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "1")};
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "transform: rotate(0deg) scale(0.2, 0.2)" : ""};
  }
`;

export const StyledNavigationContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledList = styled.ul`
  display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 80px;
  width: inherit;
  text-align: center;
  background-color: ${({ theme }) => theme.mobileMenuBlue};
`;

export const StyledNavigationLinks = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.white};
  border-bottom: ${({ theme }) => `1px solid ${theme.mobileMenuBorder}`};
  text-align: center;
  cursor: pointer;
`;
