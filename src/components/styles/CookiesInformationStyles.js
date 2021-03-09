import styled from "styled-components";
import { IoIosClose } from "react-icons/io";

export const StyledCookiesContainer = styled.div`
  position: fixed;
  bottom: 0;
  background-color: ${({ theme }) => theme.inputBorder};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledCookiesWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const StyledCookieText = styled.h6`
  font-weight: 400;
  padding: 10px;
`;
export const StyledCookieButtonClose = styled(IoIosClose)`
  background-color: transparent;
  color: ${({ theme }) => theme.textColor};
  border: none;
  outline: none;
  cursor: pointer;
`;
