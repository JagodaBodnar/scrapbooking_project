import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import {
  StyledNavigationContainer,
  StyledButton,
  StyledToTopIcon,
} from "./styles/NavigationStyles";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";
import RootContext from "../context/context";

const Navigation = () => {
  const context = useContext(RootContext);
  const { navbarColor, displayButton } = context;
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <>
      <StyledNavigationContainer navbarColor={navbarColor}>
        {isTabletOrMobile ? <MobileNavigation /> : <DesktopNavigation />}
        <StyledButton
          to="start"
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
