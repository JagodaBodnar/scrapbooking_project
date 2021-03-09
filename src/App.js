import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import MainTemplate from "./templates/MainTemplate";
import RootContext from "./context/context";
import { offers } from "./data/offers";
import { useCookies } from "react-cookie";

const App = () => {
  const setCookieToLocalStorage = () => {
    localStorage.setItem("cookieAccepted", JSON.stringify(cookieAccepted));
  };
  const getCookieFromLocalStorage = () => {
    let localStorageCookie;
    if (localStorage.getItem("cookieAccepted")) {
      localStorageCookie = JSON.parse(localStorage.getItem("cookieAccepted"));
    } else {
      localStorageCookie = false;
    }
    return localStorageCookie;
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayButton, setDisplayButton] = useState(false);
  const [navbarColor, setNavbarColor] = useState(false);
  const [offer, setOffer] = useState(offers);
  const [cookies, setCookie] = useCookies(["user"]);
  const [cookieAccepted, setCookieAccepted] = useState(
    getCookieFromLocalStorage
  );
  useEffect(() => {
    setCookieToLocalStorage();
  }, [cookieAccepted]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const showOfferDetails = (e) => {
    const toggleDetails = offer.map((offer) => {
      offer.showDesc = false;
      const elementId = e.target.getAttribute("id");
      if (offer.id === JSON.parse(elementId)) {
        offer.showDesc = !offer.showDesc;
      }
      return offer;
    });
    setOffer(toggleDetails);
  };
  useEffect(() => {
    const checkScrollTop = () => {
      if (!displayButton && window.pageYOffset > 600) {
        setDisplayButton(true);
      } else if (window.pageYOffset > 100) {
        setNavbarColor(true);
      } else {
        setNavbarColor(false);
        setDisplayButton(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
  }, []);

  const handleCookie = () => {
    setCookie("user", "gowtham", {
      path: "/",
    });
    setCookieAccepted(true);
  };

  return (
    <BrowserRouter>
      <RootContext.Provider
        value={{
          isMenuOpen,
          toggleMenu,
          offer,
          showOfferDetails,
          navbarColor,
          displayButton,
          handleCookie,
          cookieAccepted,
        }}
      >
        <MainTemplate />
      </RootContext.Provider>
    </BrowserRouter>
  );
};

export default App;
