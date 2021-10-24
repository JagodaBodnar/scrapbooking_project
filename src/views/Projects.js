import React, { useState } from "react";
import {
  StyledSectionContainer,
  StyledHeaderWrapper,
  StyledHeader,
  StyledUnderline,
} from "./styles/CommonStyles";
import { projects } from "../data/projects";
import {
  StyledGalleryContainer,
  StyledFilterContainer,
  StyledFilter,
} from "./styles/ProjectsStyles";
import Modal from "../components/modal/Modal";

const Projects = () => {
  const [project] = useState([...projects]);
  const [projectsToFilter, setProjectsToFilter] = useState([...project]);
  const [modal, setModal] = useState();
  const [toggle, setToggle] = useState(false);

  const filterProject = (value, e) => {
    e.target.parentNode.childNodes.forEach(
      (node) => (node.style.color = "black")
    );
    e.target.style.color = "red";
    const projectsCopy = [...project];
    const filteredProjects = projectsCopy.filter((item) => {
      return item.category.includes(value);
    });
    setProjectsToFilter([...filteredProjects]);
  };
  const openModal = (item) => {
    setModal(item);
    setToggle(true);
  };
  const closeModal = (value) => {
    setToggle(value);
  };
  return (
    <>
      <StyledSectionContainer id="galeria">
        <StyledHeaderWrapper>
          <StyledHeader>Moje dzieła</StyledHeader>
          <StyledUnderline></StyledUnderline>
        </StyledHeaderWrapper>
        <StyledFilterContainer>
          <StyledFilter onClick={(e) => filterProject("wszystkie", e)}>
            wszystkie
          </StyledFilter>
          <StyledFilter onClick={(e) => filterProject("album", e)}>
            albumy
          </StyledFilter>
          <StyledFilter onClick={(e) => filterProject("kartka", e)}>
            kartki
          </StyledFilter>
          <StyledFilter onClick={(e) => filterProject("pudelko", e)}>
            pudełeczka
          </StyledFilter>
        </StyledFilterContainer>
        <StyledGalleryContainer>
          {projectsToFilter.map((item) => {
            return (
              <img
                src={item.main}
                style={{ width: "100%" }}
                key={item.id}
                onClick={() => openModal(item)}
                alt={item}
              />
            );
          })}
        </StyledGalleryContainer>
        <Modal item={modal} toggle={toggle} closeModal={closeModal} />
      </StyledSectionContainer>
    </>
  );
};

export default Projects;
