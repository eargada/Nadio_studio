import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const VoicePage = () => {
  return (
    <Wrapper>
      <Header />
      <Tips>
        <TipsText>
          π‘ν! λ¬Έμ₯ μ¬μ΄μ ,(μΌν), *(λ³ν), /(μ¬λμ)λ₯Ό λ£μΌλ©΄ λ
          μμ°μ€λ¬μμ§λλ€.
        </TipsText>
      </Tips>
    </Wrapper>
  );
};

export default VoicePage;

const Wrapper = styled.div`
  .body {
    display: flex;
    min-height: 100vh;
    background-color: #f8f6f2;
  }
`;

const Tips = styled.div`
  width: 1512px;
  height: 39px;
  margin: 36px 0 0;
  padding: 6px 474px 7px 475px;
  background-color: #b14c59;
`;

const TipsText = styled.span`
  width: 563px;
  height: 26px;
  font-family: "NotoSansKR";
  font-size: 23px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: white;
`;
