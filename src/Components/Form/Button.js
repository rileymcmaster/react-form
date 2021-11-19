import React from "react";
import styled from "styled-components";

const Button = ({ onClick, action, styles, disabled }) => {
  const title = action.toUpperCase();

  return (
    <StyledButton
      styles={styles}
      type={action}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  user-select: none;
  width: 9rem;
  height: 4rem;
  text-align: center;

  transition: all 0.15s ease;

  font-size: 1.5rem;
  letter-spacing: 0.2em;
  text-indent: 0.2em;

  border: 5px solid;

  pointer-events: ${(props) => (props.disabled ? "none" : "all")};
  cursor: cell;

  color: ${(props) => props.styles.color};
  background-color: ${(props) => props.styles.backgroundColor};
  border-color: ${(props) => props.styles.borderColor};

  &:hover,
  &:focus-visible {
    outline: none;
    color: ${(props) => props.styles.hoverColor};
    background-color: ${(props) => props.styles.hoverBg};
    border-color: ${(props) => props.styles.hoverBorder};
  }
  &:active {
    color: ${(props) => props.styles.activeColor};
    background-color: ${(props) => props.styles.activeBg};
    border-color: ${(props) => props.styles.activeBorder};
  }
`;

export default Button;
