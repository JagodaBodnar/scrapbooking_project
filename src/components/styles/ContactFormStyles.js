import React from "react";
import styled from "styled-components";
import { device } from "../../globalStyles/Device";
import { Form, Field } from "formik";
import Fade from "react-reveal/Fade";
import withReveal from "react-reveal/withReveal";

export const StyledForm = withReveal(
  styled(Form)`
    width: 100%;
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  <Fade right />
);

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  @media ${device.mobile} {
    flex-direction: row;
  } ;
`;
export const StyledError = styled.div`
  font-size: 13px;
  color: #931536;
  border-radius: 3px;
  padding: 2px;
  position: absolute;
`;

export const StyledErrorName = styled(StyledError)`
  top: 45px;
  left: 8px;
`;
export const StyledErrorMail = styled(StyledError)`
  top: 85%;
  left: 0;
  padding-left: 10px;
  @media ${device.mobile} {
    top: 45px;
    left: 50%;
  } ;
`;
export const StyledErrorSubject = styled(StyledError)`
  top: 70%;
  left: 10px;
`;
export const StyledErrorTextArea = styled(StyledError)`
  top: 90%;
  left: 10px;
`;
export const StyledErrorCheckbox = styled(StyledError)`
  top: 120%;
  left: 10px;
`;

export const StyledField = styled(Field)`
  margin: 10px;
  width: 100%;
  border: none;
  border-bottom: ${({ theme }) => `2px solid ${theme.inputBorder}`};
  outline: none;
  padding-bottom: 5px;
  margin-bottom: 30px;
  font-size: 14px;
  &:focus {
    border-bottom: ${({ theme }) => `2px solid ${theme.mainBlue}`};
  }
`;
export const StyledTextArea = styled(StyledField)`
  position: relative;
  min-height: 150px;
  padding-bottom: 50px;
  resize: none;
`;
export const StyledFieldCheckbox = styled(StyledField)`
  width: 20px;
  margin: 0 10px;
  @media ${device.mobileS} {
    width: 30px;
  }
`;
export const StyledCheckboxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

export const StyledPrivacyPolicy = styled.span`
  color: ${({ theme }) => theme.mainBlue};
  margin-left: 3px;
  cursor: pointer;
`;

export const StyledButtonWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
`;

export const StyledButton = styled.button`
  width: 80%;
  background-color: ${({ theme }) => theme.mainBlue};
  color: ${({ theme }) => theme.white};
  border: ${({ theme }) => `1px solid ${theme.inputBorder}`};
  cursor: pointer;
  padding: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
  outline: none;
  margin-top: 30px;
  margin-left: 10px;

  @media ${device.mobile} {
    width: 40%;
  }
  @media ${device.desktop} {
    width: 30%;
  } ;
`;
