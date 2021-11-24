import React from "react";
import styled from "styled-components";

import Form from "./Form/index";
import GlobalStyles from "../GlobalStyles";
import Header from "./Header";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Form />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  min-height: 100vh;
  background: var(--bg-color);
`;

export default App;
