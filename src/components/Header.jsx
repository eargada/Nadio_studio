import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <img src="/images/frame.svg" alt="" />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  padding: 27px 92px;

  img {
    width: 165.52px;
    height: 32px;
  }
`;
