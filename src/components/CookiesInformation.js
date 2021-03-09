import React, { useContext } from "react";
import {
  StyledCookiesContainer,
  StyledCookieButtonClose,
  StyledCookieText,
  StyledCookiesWrapper,
} from "./styles/CookiesInformationStyles";
import RootContext from "../context/context";

const CookiesInformation = () => {
  const context = useContext(RootContext);
  const { handleCookie } = context;
  return (
    <StyledCookiesContainer>
      <StyledCookiesWrapper>
        <StyledCookieText>
          Nasza strona internetowa używa plików cookies (tzw. ciasteczka) w
          celach funkcjonalnych. Dzięki nim możemy indywidualnie dostosować
          stronę do twoich potrzeb. Każdy może zaakceptować pliki cookies albo
          ma możliwość wyłączenia ich w przeglądarce, dzięki czemu nie będą
          zbierane żadne informacje.
        </StyledCookieText>
        <StyledCookieButtonClose
          onClick={handleCookie}
        ></StyledCookieButtonClose>
      </StyledCookiesWrapper>
    </StyledCookiesContainer>
  );
};

export default CookiesInformation;
