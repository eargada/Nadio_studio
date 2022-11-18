import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const MainImage = styled.img`
  width: 879px;
  height: 640px;
  margin: 110px 0 0 0px;
  padding: 29px 63px 49px 0px;
  border-radius: 33px;
`;

const LogoImage = styled.img`
  width: 404px;
  height: 184px;
  margin: 138px 109px 80px 120px;
  padding: 0 0 0.4px;
`;

const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <div className="body">
        <div className="left">
          <LogoImage
            src="../images/logoLeft.png"
            className="right-image"
            alt=""
          />
          {/* <div>
            <input type="text" />
            <button>입력</button>
          </div> */}
        </div>
        <div className="right">
          <MainImage
            src="../images/studiomain.png"
            className="right-image"
            alt=""
          />
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
