import React from "react";
import {
  StyledSideContactContainer,
  StyledSideContactHeader,
  StyledSideContactAddress,
  StyledBottomContactAddress,
  StyledMailPhone,
  StyledSideContactCompanyName,
} from "./styles/SideContact";

const SideContact = () => {
  return (
    <>
      <StyledSideContactContainer>
        <StyledSideContactHeader>Dane kontaktowe</StyledSideContactHeader>
        <div>
          <StyledSideContactCompanyName>
            GK XXX Sp. z o.o.
          </StyledSideContactCompanyName>
          <StyledSideContactAddress>ul. Ulica 27</StyledSideContactAddress>
          <StyledSideContactAddress>00-000 Miasto</StyledSideContactAddress>
        </div>
        <StyledBottomContactAddress>
          <StyledSideContactAddress>
            e-mail: <StyledMailPhone>gkxxx@email.com</StyledMailPhone>
          </StyledSideContactAddress>
          <StyledSideContactAddress>
            tel. <StyledMailPhone>+48 000 00 00 00</StyledMailPhone>
          </StyledSideContactAddress>
        </StyledBottomContactAddress>
      </StyledSideContactContainer>
    </>
  );
};

export default SideContact;
