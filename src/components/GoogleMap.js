import React, { useState } from "react";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

import {
  StyledMap,
  StyledInfoWindowContainer,
  StyledRedirectionContainer,
  StyledDirectionContainer,
  StyledDirections,
  StyledLinkToLargerMap,
} from "./styles/GoogleMapStyles";

const MapContainer = ({ google }) => {
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});

  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowInfoWindow(!showInfoWindow);
  };
  const onClose = (props) => {
    if (showInfoWindow) {
      setShowInfoWindow(false);
      setActiveMarker(null);
    }
  };
  return (
    <>
      <StyledMap
        google={google}
        zoom={8}
        initialCenter={{
          lat: 53.1348115,
          lng: 18.0071893,
        }}
      >
        <Marker
          position={{ lat: 53.1348115, lng: 18.0071893 }}
          onClick={onMarkerClick}
          name={"ul.Ulica 27, 00-000 Miasto "}
        />
        <InfoWindow
          marker={activeMarker}
          visible={showInfoWindow}
          onClose={onClose}
        >
          <StyledInfoWindowContainer>
            <p>{selectedPlace.name}</p>
            <StyledRedirectionContainer>
              <StyledLinkToLargerMap
                href="https://www.google.com/maps/place/Tadeusza+Ko%C5%9Bciuszki+27,+85-079+Bydgoszcz,+Polska/@53.1348115,18.0071893,17z/data=!3m1!4b1!4m5!3m4!1s0x470313c3f12c3539:0x5607b3ae54a98d07!8m2!3d53.1348115!4d18.0093833"
                target="_blank"
              >
                View larger map
              </StyledLinkToLargerMap>
              <StyledDirectionContainer>
                <StyledDirections
                  href="https://www.google.com/maps/dir//Tadeusza+Ko%C5%9Bciuszki+27,+85-079+Bydgoszcz,+Polska/@53.1348115,18.0071946,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x470313c3f12c3539:0x5607b3ae54a98d07!2m2!1d18.0093833!2d53.1348115!3e0"
                  target="_blank"
                ></StyledDirections>
                <StyledLinkToLargerMap
                  href="https://www.google.com/maps/dir//Tadeusza+Ko%C5%9Bciuszki+27,+85-079+Bydgoszcz,+Polska/@53.1348115,18.0071946,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x470313c3f12c3539:0x5607b3ae54a98d07!2m2!1d18.0093833!2d53.1348115!3e0"
                  target="_blank"
                >
                  Directions
                </StyledLinkToLargerMap>
              </StyledDirectionContainer>
            </StyledRedirectionContainer>
          </StyledInfoWindowContainer>
        </InfoWindow>
      </StyledMap>
    </>
  );
};
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
})(MapContainer);
