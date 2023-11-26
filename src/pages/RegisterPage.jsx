import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Button from "components/common/Button";
import React, { useState } from "react";
import styled from "styled-components";
import * as Styled from "assets/BasicStyle";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useremail } from "redux/modules/user";

const RegisterPage = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch("");

  const onJoinHanlder = (event) => {
    const {
      target: { name, value }
    } = event;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(email); //오류없이 여기까지는 찍힘
      dispatch(useremail(email));
      console.log(email);
      navigate("/login");
      alert("가입 되었습니다.");
    } catch (error) {
      alert("가입 실패" + error.message);
    }
  };

  return (
    <Styled.BoxWrapBg>
      <Styled.BoxWrap>
        <Container>
          <LogoBox>
            <Title>회원가입</Title>
          </LogoBox>
          <FormWrapper>
            <JoinForm onSubmit={onSubmitHandler}>
              <InputEmail>
                <input type="email" value={email} onChange={onJoinHanlder} name="email" placeholder="이메일" />
              </InputEmail>
              <InputPw>
                <input
                  type="password"
                  value={password}
                  onChange={onJoinHanlder}
                  name="password"
                  autoComplete="off"
                  placeholder="비밀번호"
                />
              </InputPw>

              <Button text="회원가입" />
            </JoinForm>
          </FormWrapper>
        </Container>
      </Styled.BoxWrap>
    </Styled.BoxWrapBg>
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
const LogoBox = styled.div`
  width: 100%;
  margin-top: 8rem;
  display: flex;
  justify-content: center;
`;
const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;
const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  width: 250px;
  border-color: #6c6c6e;
  & input {
    width: 100%;
    font-size: 16px;
    line-height: 22px;
    min-height: 30px;
    padding: 0 10px 0 45px;
    height: 50px;
    border: none;
    border-radius: 10px;
    outline: none;
    transition: all 0.3s;
    &:focus {
      outline-style: solid;
      outline-color: #d9dcfa;
    }
  }
`;
const InputPw = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 10px;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
    background-image: url("https://github.com/tjdsksro90/team-project/blob/kimjiye/src/assets/images/lock.png?raw=true");
    background-size: 20px;
  }
`;
const InputEmail = styled.div`
  position: relative;
  margin-bottom: 8px;
  &::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 10px;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
    background-image: url("https://github.com/tjdsksro90/team-project/blob/kimjiye/src/assets/images/mail.png?raw=true");
    background-size: 20px;
  }
`;
const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
