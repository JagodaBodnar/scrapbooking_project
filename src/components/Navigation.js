import React, { useContext } from "react";
import {
  StyledNavigationContainer,
  StyledButton,
  StyledToTopIcon,
} from "./styles/NavigationStyles";

import DesktopNavigation from "./DesktopNavigation";
import RootContext from "../context/context";

const Navigation = () => {
  const context = useContext(RootContext);
  const { navbarColor, displayButton } = context;

  return (
    <>
      <StyledNavigationContainer navbarColor={navbarColor}>
        <DesktopNavigation />
        <StyledButton
          to="home"
          smooth
          style={
            displayButton
              ? { opacity: "1", visibility: "visible" }
              : { opacity: "0", visibility: "hidden" }
          }
        >
          <StyledToTopIcon />
        </StyledButton>
      </StyledNavigationContainer>
    </>
  );
};

export default Navigation;
