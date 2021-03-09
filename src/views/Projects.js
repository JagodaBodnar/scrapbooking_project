import React from "react";
import ProjectsCarousel from "../components/ProjectsSliderCarousel";
import {
  StyledSectionContainer,
  StyledHeaderWrapper,
  StyledHeader,
  StyledUnderline,
} from "./styles/CommonStyles";

const Projects = () => {
  return (
    <>
      <StyledSectionContainer id="realizacje">
        <StyledHeaderWrapper>
          <StyledHeader>Nasze realizacje</StyledHeader>
          <StyledUnderline></StyledUnderline>
        </StyledHeaderWrapper>
        <ProjectsCarousel />
      </StyledSectionContainer>
    </>
  );
};

export default Projects;
