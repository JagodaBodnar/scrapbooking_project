import React from "react";
import ContactForm from "../components/ContactForm";
import SideContact from "../components/SideContact";
import {
  StyledSectionContainer,
  StyledHeaderWrapper,
  StyledHeader,
  StyledUnderline,
} from "./styles/CommonStyles";
import {
  StyledContactInfoWrapper,
  StyledCompanyAddressWrapper,
  StyledFormWrapper,
  StyledIntroContainer,
} from "./styles/ContactStyles";

const Contact = () => {
  return (
    <>
      <StyledSectionContainer id="kontakt">
        <StyledHeaderWrapper>
          <StyledHeader>Kontakt</StyledHeader>
          <StyledUnderline></StyledUnderline>
        </StyledHeaderWrapper>
        <StyledIntroContainer>
          Spodobała Ci się moje prace? Czekam na Twój kontakt! Skorzystaj z
          poniższego formularza, napisz maila, zadzwoń. Zapraszam również do
          odwiedzenia mojego instagrama.
        </StyledIntroContainer>
        <StyledContactInfoWrapper>
          <StyledCompanyAddressWrapper>
            <SideContact />
          </StyledCompanyAddressWrapper>
          <StyledFormWrapper>
            <ContactForm />
          </StyledFormWrapper>
        </StyledContactInfoWrapper>
      </StyledSectionContainer>
    </>
  );
};

export default Contact;
