import styled from "styled-components";
import { Map } from "google-maps-react";

export const StyledMap = styled(Map)`
  width: 100%;
  height: 350px;
`;
export const StyledRedirectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const StyledDirectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const StyledInfoWindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
`;
export const StyledLinkToLargerMap = styled.a`
  text-decoration: none;
  color: #2f92ee;
  cursor: pointer;
`;
export const StyledDirections = styled.a`
  background-image: url("https://maps.gstatic.com/mapfiles/embed/images/entity11.png");
  background-size: center;
  background-repeat: no-repeat;
  background-size: 70px 210px;
  width: 20px;
  height: 20px;
`;
