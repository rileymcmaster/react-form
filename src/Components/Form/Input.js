import React from "react";
import styled from "styled-components";
import { ReactComponent as Star } from "../Star.svg";

const Input = ({ name, value, handleChange, error, autoFocus }) => {
  const title = name[0].toUpperCase() + name.substring(1);

  return (
    <Wrapper>
      <label>
        <p>{title}:</p>
        <input
          autoFocus={autoFocus}
          name={name}
          type="text"
          value={value}
          onChange={handleChange}
        />
      </label>
      <Icon error={error}>
        <div>
          <p>!</p>
          <Star />
        </div>
      </Icon>
      <ErrorMessageContainer
        error={error}
        className={error ? "show" : undefined}
      >
        <p className={`error-message ${error ? "message-animate" : ""}`}>
          {error}
        </p>
      </ErrorMessageContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 1.2rem;
  position: relative;

  input {
    padding: 0 1em 0.2em;
    transition: all 0.2s;
    font-size: 1.2em;
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 3px solid;
    border-color: var(--primary-color);
  }
  input:focus {
    color: var(--secondary-color);
    border-color: var(--secondary-color);
  }
  p {
    margin-bottom: 0;
  }
`;

const Icon = styled.div`
  display: flex;
  user-select: none;
  opacity: ${(props) => (props.error ? 1 : 0)};
  transform: ${(props) => (props.error ? "scale(1)" : "scale(0)")};
  transition: opacity 0.2s, transform 0.5s;

  position: absolute;
  top: 1.5em;
  left: -1.5em;

  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  p {
    position: absolute;
    font-size: 1.8em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    color: var(--secondary-color);
  }
`;

const ErrorMessageContainer = styled.div`
  user-select: none;
  margin-top: 0em;
  position: relative;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  min-height: 2em;
  overflow: hidden;

  * {
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }

  opacity: ${(props) => (props.error ? 1 : 0)};
  transform: ${(props) => (props.error ? "scaleY(1)" : "scaleY(0)")};
  transition: opacity 0.2s, transform 0.5s;

  p.error-message {
    height: 2em;
    align-self: center;
    text-align: center;
    padding: 0.5em;
    color: var(--secondary-color);
    transform: translateY(-2.7em);
    transition: all 0.6s ease-out;
  }
  p.message-animate {
    transform: translateY(0em);
  }
`;

export default Input;
