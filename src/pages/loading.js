import React, { useState, useContext } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  padding: 25px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #072227;
`;

const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7ffff;
  padding: 40px;
`;

const LoadingPage = () => {
  return (
    <Wrapper>
      <LoginWrapper>
        <img src="/loader.svg" alt="loader" />
      </LoginWrapper>
    </Wrapper>
  );
};

export default LoadingPage;
