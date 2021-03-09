import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import Navigation from "../components/Navigation";
import { mainGlobalStyles } from "../globalStyles/mainGlobalStyles";
import About from "../views/About";
import Contact from "../views/Contact";
import Home from "../views/Home";
import Offer from "../views/Offer";
import Projects from "../views/Projects";
import GlobalStyle from "../globalStyles/GlobalStyle";
import styled from "styled-components";
import CookiesInformation from "../components/CookiesInformation";
import RootContext from "../context/context";
const StyledContentContainer = styled.div`
  overflow: hidden;
`;

const MainTemplate = () => {
  const context = useContext(RootContext);
  const { cookieAccepted } = context;
  return (
    <>
      <ThemeProvider theme={mainGlobalStyles}>
        <GlobalStyle />
        <StyledContentContainer>
          <Navigation />
          <Home />
          <Offer />
          <About />
          <Projects />
          <Contact />
          {cookieAccepted ? "" : <CookiesInformation />}
        </StyledContentContainer>
      </ThemeProvider>
    </>
  );
};
export default MainTemplate;
