import styled from "styled-components";
import { FaAngleUp } from "react-icons/fa";
import { Link } from "react-scroll";

export const StyledNavigationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  background-color: ${({ navbarColor, theme }) =>
    navbarColor ? theme.white : theme.whiteTransparent};
  width: 100%;
  z-index: 9999;
`;
export const StyledNavigationList = styled.ul`
  margin-right: 5%;
`;

export const StyledLogo = styled.img`
  width: 50px;
  margin-left: 5%;
`;
export const StyledNavigationLinks = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  margin-right: 20px;
  font-size: 18px;
  &:hover {
    color: ${({ theme }) => theme.mainBlue};
  }
`;
export const StyledButton = styled(Link)`
  position: fixed;
  top: 90%;
  right: 3%;
  transition: 0.7s;
  visibility: hidden;
  background-color: ${({ theme }) => theme.mainBlue};
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.textColor};
  }
`;
export const StyledToTopIcon = styled(FaAngleUp)`
  font-size: 15px;
  color: ${({ theme }) => theme.white};
`;
