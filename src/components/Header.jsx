import * as Styled from "assets/BasicStyle";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Styled.HeaderBgStyle>
      <Styled.HeaderStyle>
        <h1>
          <Link to="/">로고</Link>
        </h1>
        <Styled.InputStyle type="text" placeholder="검색하기" color={Styled.mainColor} />
        <Styled.BtnWrapMLAuto>
          <Link to="/Login">
          <Styled.MainBtn line="line">로그인</Styled.MainBtn>
          </Link>
          <Link to="/register">
            <Styled.MainBtn>회원가입</Styled.MainBtn>
          </Link>
         
        </Styled.BtnWrapMLAuto>
      </Styled.HeaderStyle>
    </Styled.HeaderBgStyle>
  );
}

export default Header;
