import React from "react";
import {
  StyledSectionContainer,
  StyledSectionWrapper,
  StyledAboutUs,
  StyledHeaderWrapper,
} from "./styles/AboutStyles";
import { StyledHeader } from "./styles/CommonStyles";

const About = () => {
  return (
    <StyledSectionWrapper>
      <StyledSectionContainer id="o-nas">
        <StyledHeaderWrapper>
          <StyledHeader>Nasza firma</StyledHeader>
        </StyledHeaderWrapper>
        <StyledAboutUs>
          Jesteśmy zespołem profesjonalistów z branży elektroenergetycznej.
          Oferujemy kompleksową realizację inwestycji w zakresie działalności
          projektowej oraz wykonawstwa. Działamy w sposób elastyczny,
          przeanalizujemy Państwa potrzeby i przedstawimy optymalne, najlepsze
          rozwiązania. Działamy w sposób elastyczny, przeanalizujemy Państwa
          potrzeby i przedstawimy optymalne, najlepsze rozwiązania.
        </StyledAboutUs>
      </StyledSectionContainer>
    </StyledSectionWrapper>
  );
};

export default About;
