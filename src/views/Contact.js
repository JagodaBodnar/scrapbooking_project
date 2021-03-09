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
  StyledMapContainer,
} from "./styles/ContactStyles";
import MapContainer from "../components/GoogleMap";

const Contact = () => {
  return (
    <>
      <StyledSectionContainer id="kontakt">
        <StyledHeaderWrapper>
          <StyledHeader>Kontakt</StyledHeader>
          <StyledUnderline></StyledUnderline>
        </StyledHeaderWrapper>
        <StyledIntroContainer>
          Masz pytania, chcesz rozpocząć współpracę? Czekamy na Twój kontakt!
          Skorzystaj z poniższego formularza, napisz maila, zadzwoń lub odwiedź
          nas osobiście.
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
      <StyledMapContainer>
        <MapContainer />
      </StyledMapContainer>
    </>
  );
};

export default Contact;
