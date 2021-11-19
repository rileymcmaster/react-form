import React from "react";
import styled, { keyframes } from "styled-components";
import { RiLoaderFill } from "react-icons/ri";

const ProgressMessage = () => {
  return (
    <Wrapper>
      <h3>Submitting in progress</h3>
      <RiLoaderFill className="progress-icon" />
    </Wrapper>
  );
};

const rotate = keyframes`
0%{
  transform: rotate(0deg);
  filter: brightness(1)
}
50% {
  filter: brightness(.8)
}
100% {
  transform: rotate(360deg);
  filter: brightness(1)
}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: var(--secondary-color);

  .progress-icon {
    color: var(--third-color);
    font-size: 3rem;
    animation: ${rotate} 2s steps(24) infinite;
  }
`;

export default ProgressMessage;
