import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import withReveal from "react-reveal/withReveal";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";

export const StyledSideContactContainer = withReveal(
  styled.div`
    margin-top: 90px;
    display: flex;
    flex-direction: column;
  `,
  <Fade left />
);

export const StyledEmail = styled(MdEmail)`
  font-size: 30px;
  cursor: pointer;
  margin: 20px;
  color: ${({ theme }) => theme.textColor};
  &:hover {
    color: ${({ theme }) => theme.mainRed};
  }
`;

export const StyledInstagram = styled(AiFillInstagram)`
  font-size: 30px;
  cursor: pointer;
  margin: 20px;
  color: ${({ theme }) => theme.textColor};
  &:hover {
    color: ${({ theme }) => theme.mainRed};
  }
`;
export const StyledPhone = styled(MdPhoneIphone)`
  font-size: 30px;
  cursor: pointer;
  margin: 20px;
  color: ${({ theme }) => theme.textColor};
  &:hover {
    color: ${({ theme }) => theme.mainRed};
  }
`;
export const StyledContactSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledLabel = styled.label`
  cursor: pointer;
`;
