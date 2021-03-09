import styled from "styled-components";
import { device } from "../../globalStyles/Device";

export const StyledSectionContainer = styled.div`
  min-height: 300px;
  display: flex;
  width: 80%;
  margin: 100px auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media ${device.mobileS} {
    margin: 60px auto;
  }
`;
export const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;
export const StyledHeader = styled.h1`
  color: ${({ theme }) => theme.sectionHeader};
  font-weight: 300;
  font-size: 35px;
  @media ${device.tablet} {
    font-size: 50px;
  } ;
`;
export const StyledUnderline = styled.span`
  width: 80px;
  height: 2px;
  background-color: ${({ theme }) => theme.mainBlue};
`;
