import React, { useContext } from "react";
import { Link } from "react-scroll";

import RootContext from "../context/context";
import {
  StyledHomeContainer,
  StyledSectionWrapper,
  StyledDetailsSection,
  StyledRightContainer,
  StyledInformationParagraphs,
  StyledSideInformation,
  StyledRect,
  StyledSvg,
  StyledButton,
  StyledSpan,
  StyledSpanSmall,
} from "./styles/HomeStyles";

const Home = () => {
  const context = useContext(RootContext);
  const { isMenuOpen } = context;
  return (
    <StyledHomeContainer id="home">
      <StyledSectionWrapper>
        <StyledDetailsSection>
          <StyledRightContainer>
            <StyledSideInformation>
              <StyledInformationParagraphs>
                <StyledSpan>Scrapbooking jest moją pasją.</StyledSpan>
                <StyledSpanSmall>
                  Tworzę albumy, kartki świąteczne oraz pudełka ozdobne.
                </StyledSpanSmall>
              </StyledInformationParagraphs>
              <Link to="galeria" smooth offset={isMenuOpen ? -220 : -80}>
                <StyledButton>
                  <StyledSvg>
                    <StyledRect
                      x="0"
                      y="0"
                      fill="none"
                      width="100%"
                      height="100%"
                    />
                  </StyledSvg>
                  Zobacz moją twórczość
                </StyledButton>
              </Link>
            </StyledSideInformation>
          </StyledRightContainer>
        </StyledDetailsSection>
      </StyledSectionWrapper>
    </StyledHomeContainer>
  );
};

export default Home;
