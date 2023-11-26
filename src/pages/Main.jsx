import * as Styled from "assets/BasicStyle";
import * as MainStyled from "assets/main/index";
import React, { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { app } from "../firebase";
import Write from "components/Write";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";

function Main() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
      setUserInfo(user);
      if (user != null) {
        setProfileEmail(user.email);
        setProfileName(user.displayName);
        setProfileImg(user.photoURL);
      }
    });
  }, []);

  const [userInfo, setUserInfo] = useState(null);
  const [profileEmail, setProfileEmail] = useState(auth.currentUser != null ? auth.currentUser.email : null);
  const [profileName, setProfileName] = useState(auth.currentUser != null ? auth.currentUser.displayName : null);
  const [profileImg, setProfileImg] = useState(auth.currentUser != null ? auth.currentUser.photoURL : null);

  // 마이페이지 이동
  const linkMypage = () => {
    navigate("/mypage");
  };

  // 로그인페이지 이동
  const linkLogin = () => {
    navigate("/login");
  };
  return (
    <Styled.BoxWrapBg>
      <Styled.BoxWrap>
        <Styled.BoxLeft>
          {userInfo != null ? (
            <div className="box">
              <MainStyled.UserProfile>
                <Styled.ImgWidth src={profileImg} alt="" />
              </MainStyled.UserProfile>
              <MainStyled.UserWrap>
                <p>이메일</p>
                <div>{profileEmail}</div>
              </MainStyled.UserWrap>
              <MainStyled.UserWrap>
                <p>이름</p>
                <div>{profileName == null ? "-" : profileName}</div>
              </MainStyled.UserWrap>
              <Styled.BoxBtn width="100%" margin="auto 0 0 0" onClick={linkMypage}>
                프로필 수정
              </Styled.BoxBtn>
            </div>
          ) : (
            <div className="box mini">
              <MainStyled.UserNoWrap>
                <p>로그인 통해 본인 정보를 확인하세요</p>
                <Styled.BoxBtn width="100%" height="50px" margin="auto 0 auto 0" onClick={linkLogin}>
                  로그인
                </Styled.BoxBtn>
              </MainStyled.UserNoWrap>
            </div>
          )}
        </Styled.BoxLeft>
        <Styled.BoxRight>
          <Write userInfo={userInfo} profileImg={profileImg}></Write>
          <Styled.Line></Styled.Line>
        </Styled.BoxRight>
      </Styled.BoxWrap>
    </Styled.BoxWrapBg>
  );
}

export default Main;
