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
  justify-content: center;
  height: 100vh;
`;

export default App;
