import React, { useContext } from "react";
import { Link } from "react-scroll";
import logo from "../assets/icons/logo.png";
import RootContext from "../context/context";
import {
  StyledHomeContainer,
  StyledSectionWrapper,
  StyledCompanySection,
  StyledLeftContainer,
  StyledLogo,
  StyledCompanyName,
  StyledCompanySubName,
  StyledCompanySubInfo,
  StyledScrollDownButton,
  StyledDetailsSection,
  StyledRightContainer,
  StyledInformationParagraphs,
  StyledSideInformation,
} from "./styles/HomeStyles";

const Home = () => {
  const context = useContext(RootContext);
  const { isMenuOpen } = context;
  return (
    <StyledHomeContainer id="start">
      <StyledSectionWrapper>
        <StyledCompanySection>
          <StyledLeftContainer>
            <StyledLogo src={logo} alt="GKEPB logo" />
            <StyledCompanyName>
              Grupa Kapitałowa
              <StyledCompanySubName>XXX</StyledCompanySubName>
            </StyledCompanyName>

            <StyledCompanySubInfo>
              Jesteśmy zespołem profesjonalistów z branży elektroenergetycznej.
            </StyledCompanySubInfo>
            <Link to="nasza-oferta" smooth offset={isMenuOpen ? -220 : -80}>
              <StyledScrollDownButton />
            </Link>
          </StyledLeftContainer>
        </StyledCompanySection>
        <StyledDetailsSection>
          <StyledRightContainer>
            <StyledSideInformation>
              <StyledInformationParagraphs>
                Gwarantujemy profesjonalne doradztwo wsparte wieloletnim
                doświadczeniem.
              </StyledInformationParagraphs>
              <StyledInformationParagraphs>
                Oferujemy kompleksową realizację inwestycji w zakresie
                działalności projektowej oraz wykonawstwa.
              </StyledInformationParagraphs>
              <StyledInformationParagraphs>
                Działamy w sposób elastyczny, przeanalizujemy Państwa potrzeby i
                przedstawimy optymalne, najlepsze rozwiązania.
              </StyledInformationParagraphs>
            </StyledSideInformation>
          </StyledRightContainer>
        </StyledDetailsSection>
      </StyledSectionWrapper>
    </StyledHomeContainer>
  );
};

export default Home;
