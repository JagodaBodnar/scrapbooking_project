import React, { useState } from "react";
import {
  StyledEmail,
  StyledInstagram,
  StyledPhone,
  StyledSideContactContainer,
  StyledContactSide,
  StyledLabel,
} from "./styles/SideContact";

const SideContact = () => {
  const [email] = useState("example@email.com");
  const [phone] = useState("+48 123 456 789");
  const fallbackCopyTextToClipboard = (text) => {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log("Fallback: Copying text command was " + msg);
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }

    document.body.removeChild(textArea);
  };
  const copyTextToClipboard = (text) => {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(
      function () {},
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  };
  const copyEmail = () => {
    copyTextToClipboard(email);
  };
  const copyPhone = () => {
    copyTextToClipboard(phone);
  };
  return (
    <>
      <StyledSideContactContainer>
        <StyledContactSide>
          <StyledEmail onClick={copyEmail} />
          <StyledLabel onClick={copyEmail}>example@email.com</StyledLabel>
        </StyledContactSide>
        <StyledContactSide>
          <StyledPhone onClick={copyPhone} />
          <StyledLabel onClick={copyPhone}>+48 123 456 789</StyledLabel>
        </StyledContactSide>
        <StyledContactSide>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledInstagram />
          </a>
        </StyledContactSide>
      </StyledSideContactContainer>
    </>
  );
};

export default SideContact;
