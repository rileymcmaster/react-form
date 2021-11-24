import React from "react";
import styled from "styled-components";
import { GiKiwiBird } from "react-icons/gi";

const Header = () => {
  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <Wrapper>
      <TitleContainer>
        <button onClick={refreshPage} aria-label="Link to home">
          <GiKiwiBird className="icon" />
        </button>
        <h1 className="title">JRM Sign-up</h1>
      </TitleContainer>
      <SubTitleContainer>
        <h1>FORM</h1>
      </SubTitleContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: var(--primary-color);
  background-color: var(--secondary-color);
  width: 100%;
  h1 {
    font-size: 3rem;
  }
`;

const TitleContainer = styled.div`
  padding: 0.6rem 2rem 0;
  width: 100%;

  @media (max-width: 530px) {
    padding: 1rem 1rem 0;
  }
  max-width: var(--content-width);
  margin: auto;
  h1.title {
    text-align: right;
    line-height: 0.8;
  }

  .icon {
    margin-bottom: -1rem;
    font-size: 4rem;
    color: var(--primary-color);
  }
`;

const SubTitleContainer = styled.div`
  background-color: var(--bg-color);
  h1 {
    max-width: var(--content-width);
    margin: auto;
    color: var(--secondary-color);
    text-align: right;
    letter-spacing: 0.3em;
    padding: 0 3rem;
    @media (max-width: 530px) {
      padding: 0 1.9rem;
    }
  }
`;

export default Header;
