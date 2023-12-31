import { onAuthStateChanged, signOut } from "@firebase/auth";
import * as Styled from "assets/BasicStyle";
import { auth } from "../firebase";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [userTab, setUserTab] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
      if (user === null) {
        setUserTab(false);
      } else {
        setUserTab(true);
      }
    });
  }, []);

  // 로그아웃
  const logOut = async (event) => {
    await signOut(auth);
  };

  return (
    <Styled.HeaderBgStyle>
      <Styled.HeaderStyle>
        <h1>
          <Link to="/">
            <svg width="1108" height="679" viewBox="0 0 1108 679" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M461.309 513.518C454.909 497.118 441.975 442.351 436.309 417.018C388.309 457.818 338.309 467.351 319.309 467.018C239.309 459.018 201.309 403.018 199.809 347.518C198.309 292.018 227.309 228.518 319.309 219.018C392.909 211.418 432.975 278.185 443.809 312.518C449.642 318.518 464.909 359.418 479.309 475.018C493.709 590.618 608.642 648.185 664.309 662.518C724.309 681.351 870.009 698.818 972.809 618.018C1101.31 517.018 1106.31 389.518 1107.81 330.518C1109.31 271.518 1061.81 164.018 1034.31 127.518C1006.81 91.018 896.809 -1.48197 757.309 0.0180291C645.709 1.21803 571.142 53.8514 547.809 80.018C558.642 92.6847 586.109 124.618 609.309 151.018C632.509 177.418 651.309 238.018 657.809 265.018C657.809 244.018 719.309 207.378 766.809 211.518C875.809 221.018 895.309 307.018 896.809 338.518C898.309 370.018 879.309 475.018 757.309 475.018C635.309 475.018 636.809 296.518 628.809 265.018C620.809 233.518 624.809 224.518 559.309 127.518C506.909 49.918 393.809 24.1847 343.809 21.018C304.975 16.1846 203.709 25.918 109.309 103.518C14.9087 181.118 -2.69132 303.185 0.308682 354.518C2.14202 400.351 26.5087 510.618 109.309 585.018C192.109 659.418 300.142 669.685 343.809 665.518C447.809 655.518 519.309 603.518 519.309 603.518C494.109 593.918 470.142 539.518 461.309 513.518Z"
                fill="black"
              />
            </svg>
          </Link>
        </h1>
        {/* <Styled.InputStyle type="text" placeholder="검색하기" color={Styled.mainColor} /> */}
        <Styled.BtnWrapMLAuto>
          {userTab ? (
            <>
              <Styled.MainBtn line="line" onClick={() => logOut()}>
                로그아웃
              </Styled.MainBtn>
              <Link to="/mypage">
                <Styled.MainBtn>마이페이지</Styled.MainBtn>
              </Link>
            </>
          ) : (
            <>
              <Link to="/Login">
                <Styled.MainBtn line="line">로그인</Styled.MainBtn>
              </Link>
              <Link to="/register">
                <Styled.MainBtn>회원가입</Styled.MainBtn>
              </Link>
            </>
          )}
        </Styled.BtnWrapMLAuto>
      </Styled.HeaderStyle>
    </Styled.HeaderBgStyle>
  );
}

export default Header;
