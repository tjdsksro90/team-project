import * as Styled from "assets/BasicStyle";
// import * as MainStyled from "assets/main/index";
import { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { app } from "../firebase"; //eslint-disable-line no-unused-vars
import Test from "../components/Test";
import Write from "../components/Write";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function Main() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
    });
  }, []);
  return (
    <Styled.BoxWrapBg>
      <Styled.BoxWrap>
        <Styled.BoxLeft>left : 로그인 정보 및 카테고리?</Styled.BoxLeft>
        <Styled.BoxRight>
          <Styled.BoxBtn line="line" width="100%">
            확인용 박스
          </Styled.BoxBtn>
          <Styled.BoxBtn>확인용 박스</Styled.BoxBtn>
          <Styled.FlexCenter>
            <Styled.RountImg>
              <Styled.ImgWidth src="" alt="" />
            </Styled.RountImg>
            <span>
              <span>오늘 할 이야기가 뭔가요?</span>
              <AiFillCheckCircle />
            </span>
          </Styled.FlexCenter>
          <Test></Test>
          <Write></Write>
          <Styled.Line></Styled.Line>
        </Styled.BoxRight>
      </Styled.BoxWrap>
    </Styled.BoxWrapBg>
  );
}

export default Main;
