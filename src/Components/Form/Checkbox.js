import React from "react";
import styled from "styled-components";

const Checkbox = ({ name, checked, onChange, error }) => {
  return (
    <Wrapper>
      <StyledLabel>
        <HiddenCheckbox
          name={name}
          checked={checked}
          onChange={onChange}
          type="checkbox"
        />
        <StyledCheckbox checked={checked} />
        <p>Subscribe to newsletter</p>
      </StyledLabel>
      <ErrorMessage className={error ? "show-error" : undefined}>
        {error}
      </ErrorMessage>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  font-size: 1.3rem;
`;
const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  p {
    margin-left: 0.5rem;
  }
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
`;

const StyledCheckbox = styled.div`
  cursor: cell;
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  background: ${(props) =>
    props.checked ? "var(--third-color)" : "var(--bg-color)"};
  border: 3px solid var(--primary-color);

  ${HiddenCheckbox}:focus-visible + &, &:hover {
    background-color: var(--secondary-color);
    box-shadow: 0 0 6px 2px var(--third-color);
  }

  &::after {
    content: "✔";
    display: ${(props) => (props.checked ? "visible" : "none")};
    position: absolute;
    top: -0.4em;
    left: 0.01em;
    color: var(--primary-color);
    font-size: 2.9rem;
  }
`;

const ErrorMessage = styled.p`
  color: var(--secondary-color);
  text-align: center;
  width: 80%;
  margin: 0 auto;
  height: 2rem;
  white-space: nowrap;
  padding: 0 0.5rem 0.2rem;
  text-shadow: 2px 2px 2px rgba(00, 0, 0, 0.5);
  &.show-error {
    border-bottom: 5px solid var(--error-color);
  }
`;

export default Checkbox;
