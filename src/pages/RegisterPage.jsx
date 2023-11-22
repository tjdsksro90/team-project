import Button from "components/common/Button";
import React from "react";
import styled from "styled-components";
import avatar from "assets/images/avatar.png"

const RegisterPage = () => {
  return (
    <Container>
      <LogoBox>
        <Title>회원가입</Title>
      </LogoBox>
      <JoinForm>
        <InputId>
          <input type="id" placeholder="아이디" />
        </InputId>
        <input type="password" placeholder="비밀번호" />
        <input type="email" placeholder="이메일" />
        <InputName>
          <input type="text" placeholder="이름" />
        </InputName>
        <input type="text" placeholder="생년월일" />
      </JoinForm>

        <Button text="회원가입"/>

    </Container>
  );
};

export default RegisterPage;

const Container = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
`;
const LogoBox = styled.div``;
const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;
const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  width: 420px;
  border-color: #6c6c6e;
  & input {
    width: 100%;
    font-size: 16px;
    line-height: 22px;
    min-height: 30px;
    padding: 0 10px 0 45px;
    height: 50px;
  }
`;

const InputId = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 10px;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
    background-image:url("https://github.com/tjdsksro90/team-project/blob/kimjiye/src/assets/images/avatar.png?raw=true");
    background-size: 20px;
  }
  &::after {
  }
`;
const InputName = styled.div`
  margin-top: 20px;
`;
