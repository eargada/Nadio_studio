import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <div className="body">
        <div className="left">
          <img src="" alt="" />
          <div>
            <input type="text" />
            <button>입력</button>
          </div>
        </div>
        <div className="right">
          <img src="" className="right-image" alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default MainPage;

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
