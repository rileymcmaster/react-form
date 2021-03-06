import React, { useState } from "react";
import styled from "styled-components";

import Input from "./Input";
import Checkbox from "./Checkbox";
import Button from "./Button";
import ProgressMessage from "./ProgressMessage";
import { validateEmail } from "../validateEmail";

import buttonStyles from "../buttonStyles";

const initialState = {
  name: "",
  company: "",
  email: "",
  subscribe: false,
};

const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const [errorMessages, setErrorMessages] = useState(null);
  const [submitStatus, setSubmitStatus] = useState("not started");

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const isCheckbox = e.target.type === "checkbox";

    if (errorMessages?.[key]) {
      let errorMessagesCopy = errorMessages;
      delete errorMessagesCopy[key];
      setErrorMessages(errorMessagesCopy);
    }

    setFormData({ ...formData, [key]: isCheckbox ? e.target.checked : value });
    return;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let { name, company, email, subscribe } = formData;
    let validationErrors = {};

    if (name.length <= 1) {
      validationErrors.name = "Name can't be blank";
    }
    if (company.length <= 1) {
      validationErrors.company = "Company can't be blank";
    }
    if (!subscribe) {
      validationErrors.subscribe = "You must subscribe!";
    }
    const emailCheck = validateEmail(email);

    if (emailCheck) {
      validationErrors.email = emailCheck;
    }
    const currentErrorKeys = Object.keys(validationErrors);

    if (currentErrorKeys.length > 0) {
      setErrorMessages(validationErrors);
      return;
    }

    setSubmitStatus("in progress");
    setTimeout(() => {
      setSubmitStatus("complete");
    }, 3000);
  };

  const handleReset = () => {
    setErrorMessages(null);
    setFormData(initialState);
  };

  const textInputs = Object.keys(formData).filter((input) => {
    return input !== "subscribe";
  });

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        {submitStatus === "complete" ? (
          <h1 className="success-message">
            Thanks for the info, {formData.name.split(" ")[0]}!
          </h1>
        ) : (
          <>
            <TextInputsContainer>
              {textInputs.map((input, index) => {
                return (
                  <Input
                    key={input}
                    autoFocus={index === 0}
                    name={input}
                    value={formData[input]}
                    handleChange={handleChange}
                    error={errorMessages?.[input]}
                  />
                );
              })}
            </TextInputsContainer>
            <CheckboxContainer>
              <Checkbox
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
                error={errorMessages?.subscribe}
              />
            </CheckboxContainer>
            {submitStatus === "in progress" && <ProgressMessage />}
            <ButtonContainer>
              <Button
                action="reset"
                onClick={handleReset}
                styles={buttonStyles.reset}
                disabled={submitStatus === "in progress"}
              />
              <Button
                action="submit"
                onClick={handleSubmit}
                styles={buttonStyles.submit}
                disabled={submitStatus === "in progress"}
              />
            </ButtonContainer>
          </>
        )}
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--bg-color);
  width: 100%;
  height: 100%;

  form {
    margin: auto;
    max-width: var(--content-width);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    padding: 0 2rem 6rem;
  }
  @media (min-width: 768px) {
    form {
      gap: 2rem;
    }
  }

  h1.success-message {
    margin-top: 5rem;
    text-align: center;
  }
  @media screen and (min-width: 400px) {
    form {
      padding-bottom: 4rem;
    }
  }
`;

const TextInputsContainer = styled.div`
  margin-top: 1rem;

  @media screen and (min-width: 900px) {
    & {
      margin-top: 0;
    }
  }
  margin-bottom: -2rem;
`;

const CheckboxContainer = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  * ~ * {
    margin-left: 2rem;
  }

  @media (max-width: 300px) {
    flex-direction: column;
    * ~ * {
      margin-top: 1rem;
      margin-left: 0rem;
    }
  }
`;

export default Form;
