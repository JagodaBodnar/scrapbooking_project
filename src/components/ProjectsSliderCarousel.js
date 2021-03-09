import React, { useState } from "react";
import { projects } from "../data/projects";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  StyledSliderContainer,
  StyledSliderWrap,
  StyledImg,
  StyledProjectsInnerContainer,
  StyledInnerSlider,
  StyledProjectsParagraphContainer,
  StyledProjectsParagraph,
  StyledProjectsTitle,
  StyledRevealButton,
  StyledOpenDetailsIcons,
  StyledCloseDetailsIcons,
  StyledImgReveal,
  StyledRevealContainer,
  StyledProjectsParagraphCopy,
} from "./styles/ProjectsSliderCarouselStyles";
import { v4 as uuidv4 } from "uuid";
import "./styles/slider.css";

const ProjectsCarousel = () => {
  const [projectsList, setProjectsList] = useState(projects);
  const [initial, setInitial] = useState(0);
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
      const change = projectsList.map((item) => {
        item.show = false;
        return item;
      });
      setProjectsList(change);
    },

    afterChange: (current) => {
      const change = projectsList.map((item) => {
        item.show = false;
        return item;
      });
      setProjectsList(change);
      setInitial(current);
    },
  };

  const showDescription = (e) => {
    const eAttr = e.currentTarget.parentNode.getAttribute("id");
    const showMore = projectsList.map((item) => {
      item.show = false;
      if (item.id === JSON.parse(eAttr)) {
        item.show = true;
      }
      return item;
    });
    setProjectsList(showMore);
  };
  const hideDescription = () => {
    const showMore = projectsList.map((item) => {
      item.show = false;
      return item;
    });
    window.scrollTo(0, 1800);
    setProjectsList(showMore);
  };

  return (
    <>
      <StyledSliderContainer>
        <StyledSliderWrap>
          <Slider {...settings} initialSlide={initial}>
            {projectsList.map((item) => {
              const { project, show, title, id, desc, images } = item;
              return (
                <StyledProjectsInnerContainer key={id}>
                  <StyledInnerSlider>
                    <StyledImg src={project} />
                    <StyledRevealContainer isCollapsed={show}>
                      {images.map((item) => {
                        return <StyledImgReveal key={uuidv4()} src={item} />;
                      })}
                      <StyledProjectsParagraphCopy id={id} isCollapsed={show}>
                        {show ? (
                          <StyledRevealButton onClick={() => hideDescription()}>
                            <StyledCloseDetailsIcons />
                          </StyledRevealButton>
                        ) : (
                          <StyledRevealButton
                            onClick={(e) => showDescription(e)}
                          >
                            <StyledOpenDetailsIcons />
                          </StyledRevealButton>
                        )}
                        <StyledProjectsTitle>{title}</StyledProjectsTitle>
                        <StyledProjectsParagraph>
                          {desc}
                        </StyledProjectsParagraph>
                      </StyledProjectsParagraphCopy>
                    </StyledRevealContainer>
                    <StyledProjectsParagraphContainer
                      id={id}
                      isCollapsed={show}
                    >
                      {show ? (
                        <StyledRevealButton onClick={() => hideDescription()}>
                          <StyledCloseDetailsIcons />
                        </StyledRevealButton>
                      ) : (
                        <StyledRevealButton onClick={(e) => showDescription(e)}>
                          <StyledOpenDetailsIcons />
                        </StyledRevealButton>
                      )}
                      <StyledProjectsTitle>{title}</StyledProjectsTitle>
                      <StyledProjectsParagraph>{desc}</StyledProjectsParagraph>
                    </StyledProjectsParagraphContainer>
                  </StyledInnerSlider>
                </StyledProjectsInnerContainer>
              );
            })}
          </Slider>
        </StyledSliderWrap>
      </StyledSliderContainer>
    </>
  );
};

export default ProjectsCarousel;
