import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  StyledForm,
  StyledField,
  StyledTextArea,
  StyledErrorName,
  StyledErrorMail,
  StyledErrorTextArea,
  StyledButtonWrapper,
  StyledButton,
  StyledInputContainer,
} from "./styles/ContactFormStyles";

const ContactForm = () => {
  const formValidationSchema = Yup.object().shape({
    name: Yup.string().required("Proszę o podanie imienia i nazwiska."),
    email: Yup.string()
      .email("Podany adres e-mail nie jest poprawny.")
      .required("Proszę o podanie adresu e-mail."),
    message: Yup.string().required("Proszę o wpisanie treści wiadomości. "),
  });
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
          subject: "",
          acceptTerms: false,
        }}
        validationSchema={formValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(values) => (
          <StyledForm>
            <StyledInputContainer>
              <StyledErrorName>
                <ErrorMessage name="name" />
              </StyledErrorName>
              <StyledField
                type="text"
                name="name"
                placeholder="Imię i nazwisko"
                id="name"
                value={values.name}
              />
              <StyledErrorMail>
                <ErrorMessage name="email" />
              </StyledErrorMail>
              <StyledField
                type="email"
                name="email"
                placeholder="Adres e-mail"
                id="email"
                value={values.email}
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledErrorTextArea>
                <ErrorMessage name="message" />
              </StyledErrorTextArea>
              <StyledTextArea
                component="textarea"
                name="message"
                id="message"
                placeholder="Treść wiadomości"
                value={values.message}
              />
            </StyledInputContainer>
            <StyledButtonWrapper>
              <StyledButton type="submit">Wyślij wiadomość</StyledButton>
            </StyledButtonWrapper>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
export default ContactForm;
