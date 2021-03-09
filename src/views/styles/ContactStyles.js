import styled from "styled-components";
import { device } from "../../globalStyles/Device";

export const StyledIntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  color: ${({ theme }) => theme.iconsBackground};
  text-align: center;
  @media ${device.laptop} {
    width: 50%;
  }
`;
export const StyledContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  margin: 0 auto;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const StyledCompanyAddressWrapper = styled.div`
  flex: 1;
  padding-left: 10px;
`;

export const StyledFormWrapper = styled.div`
  flex: 2;
`;

export const StyledMapContainer = styled.div`
  height: 350px;
  position: relative;
  filter: grayscale(1);
  &:hover {
    filter: grayscale(0);
  }
`;
