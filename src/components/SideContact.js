import React from "react";
import {
  StyledEmail,
  StyledInstagram,
  StyledPhone,
  StyledSideContactContainer,
  StyledContactSide,
} from "./styles/SideContact";

const SideContact = () => {
  return (
    <>
      <StyledSideContactContainer>
        Aby skopiować kliknij ikonę:
        <StyledContactSide>
          <StyledEmail />
          <label>example@email.com</label>
        </StyledContactSide>
        <StyledContactSide>
          <StyledPhone />
          <label>+48 123 456 789</label>
        </StyledContactSide>
        <StyledContactSide>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledInstagram />
          </a>
          <label>instagram name</label>
        </StyledContactSide>
      </StyledSideContactContainer>
    </>
  );
};

export default SideContact;
