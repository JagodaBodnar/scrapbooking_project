import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { device } from "../../globalStyles/Device";

export const StyledModal = styled.div`
  display: ${({ toggle }) => (toggle ? "block" : "none")};
  width: 100%;
  background-color: transparent;
  left: 5%;
  top: 20%;
  padding: 20px;
  position: fixed;
  z-index: 1000000;
  align-items: center;
  justify-content: center;
  @media ${device.mobileS} {
    width: 100%;
    left: 0;
    top: 35%;
  }
  @media ${device.laptop} {
    top: 13%;
  }
  @media ${device.desktop} {
    width: 60%;
    left: 20%;
    top: 13%;
  }
`;

export const StyledBackdrop = styled.div`
  display: ${({ toggle }) => (toggle ? "block" : "none")};
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(255, 255, 255, 1);
`;

export const StyledCloseButton = styled(IoClose)`
  display: block;
  z-index: 100;
  font-size: 20px;
  position: fixed;
  right: 10%;
  top: 10%;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.mainRed};
  }
`;
