import React, { useContext } from "react";
import {
  StyledIconsContainer,
  StyledIconsWrapper,
  StyledOfferIcon,
  StyledDetailsWrapper,
  StyledDetailsContainer,
  StyledShowDetails,
  StyledDetailsParagraph,
} from "./styles/OfferStyles";
import {
  StyledSectionContainer,
  StyledHeaderWrapper,
  StyledHeader,
  StyledUnderline,
} from "./styles/CommonStyles";
import RootContext from "../context/context";
import { v4 as uuidv4 } from "uuid";

const Offer = () => {
  const context = useContext(RootContext);
  const { showOfferDetails, offer } = context;

  return (
    <StyledSectionContainer id="nasza-oferta">
      <StyledHeaderWrapper>
        <StyledHeader>Nasza oferta</StyledHeader>
        <StyledUnderline></StyledUnderline>
      </StyledHeaderWrapper>
      <StyledIconsContainer>
        {offer.map((offer) => {
          const { id, img, showDesc } = offer;
          return (
            <StyledIconsWrapper key={id}>
              <StyledOfferIcon
                id={id}
                src={img}
                onClick={(e) => showOfferDetails(e)}
                isCollapsed={showDesc}
              />
            </StyledIconsWrapper>
          );
        })}
      </StyledIconsContainer>
      <StyledDetailsContainer>
        <StyledDetailsWrapper>
          {offer.map((offer) => {
            const { id, showDesc, description } = offer;
            return (
              <StyledShowDetails isCollapsed={showDesc} key={id}>
                {description.map((item) => {
                  return (
                    <StyledDetailsParagraph key={uuidv4()}>
                      {item}
                    </StyledDetailsParagraph>
                  );
                })}
              </StyledShowDetails>
            );
          })}
        </StyledDetailsWrapper>
      </StyledDetailsContainer>
    </StyledSectionContainer>
  );
};

export default Offer;
