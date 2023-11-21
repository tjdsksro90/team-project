import * as Styled from "assets/BasicStyle";
import * as MainStyled from "assets/main/index";
import { app } from "firbase";
import React, { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

function Main() {
  useEffect(() => {
    console.log("app", app);
  }, []);
  return (
    <MainStyled.BoxWrapBg>
      <MainStyled.BoxWrap>
        <MainStyled.BoxLeft>left : 로그인 정보 및 카테고리?</MainStyled.BoxLeft>
        <MainStyled.BoxRight>
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
          <Styled.Line></Styled.Line>
        </MainStyled.BoxRight>
      </MainStyled.BoxWrap>
    </MainStyled.BoxWrapBg>
  );
}

export default Main;
