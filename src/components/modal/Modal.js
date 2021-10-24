import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../../../node_modules/react-awesome-slider/dist/styles.css";
import "../styles/styles.css";
import React from "react";
import { StyledModal, StyledBackdrop, StyledCloseButton } from "./ModalStyles";

const Modal = ({ item, toggle, closeModal }) => {
  const Slider = (
    <AwesomeSlider organicArrows={false} cssModule={AwesomeSliderStyles}>
      {item &&
        item.images.map((item) => {
          return <div data-src={item} key={item.id} />;
        })}
    </AwesomeSlider>
  );
  return (
    <>
      <StyledBackdrop
        toggle={toggle}
        onClick={() => closeModal(false)}
      ></StyledBackdrop>
      <StyledModal toggle={toggle}>
        {Slider}
        <StyledCloseButton onClick={() => closeModal(false)} />
      </StyledModal>
    </>
  );
};
export default Modal;
