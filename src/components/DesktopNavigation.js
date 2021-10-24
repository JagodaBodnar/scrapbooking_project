import React from "react";
import { navigation } from "../data/navigationLinks";
import { v4 as uuidv4 } from "uuid";
import {
  StyledNavigationList,
  StyledNavigationLinks,
  StyledLogo,
} from "./styles/NavigationStyles";
import "./styles/navigation.css";

const DesktopNavigation = () => {
  return (
    <>
      <StyledLogo>PoterArt</StyledLogo>
      <StyledNavigationList>
        {navigation.categories.map((navItem) => {
          const navItemTransformed =
            navItem.charAt(0).toLowerCase() + navItem.slice(1);
          const itemPath = navItemTransformed.replace(" ", "-");
          return (
            <StyledNavigationLinks
              key={uuidv4()}
              to={`${itemPath}`}
              activeClass="active"
              offset={-80}
              smooth
              spy
            >
              {navItem}
            </StyledNavigationLinks>
          );
        })}
      </StyledNavigationList>
    </>
  );
};

export default DesktopNavigation;
