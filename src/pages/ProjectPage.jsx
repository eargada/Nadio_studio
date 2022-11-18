import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const TitleText = styled.span`
  color: #000000;
  font-size: 26px;
  text-align: left;
  font-family: "Noto Sans KR", sans-serif;
  margin-left: 120px;
  margin-top: 110px;
`;

const ProjectPage = () => {
  return (
    <Wrapper>
      <Header />
      <div className="body">
        <TitleText className="title">나의 프로젝트</TitleText>
      </div>
    </Wrapper>
  );
};

export default ProjectPage;

const Wrapper = styled.div`
  .body {
    display: flex;
    min-height: 100vh;
    background-color: #f8f6f2;
  }

  .left {
    display: flex;
    flex-direction: column;
  }
`;
