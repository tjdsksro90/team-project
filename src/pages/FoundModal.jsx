import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/common/Button";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { IoClose } from "react-icons/io5";

function FoundModal({ setModal }) {
  const [userEmail, setUserEmail] = useState("");
  const auth = getAuth();
  const getEmailHandler = (e) => {
    setUserEmail(e.target.value);
  };
  const onFoundHandler = async (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        alert("비밀번호 재설정 링크를 보내드립니다.");
        setModal(false);
      })
      .catch((error) => {
        alert("등록되지 않은 이메일입니다." + error.message);
      });
  };

  return (
    <Container>
      <ButtonWrapper>
        <CloseBtn onClick={() => setModal(false)}>
          <IoClose />
        </CloseBtn>
      </ButtonWrapper>

      <FoundInfo>
        <FoundBox onSubmit={onFoundHandler}>
          <label>이메일 주소</label>
          <input value={userEmail} type="email" onChange={getEmailHandler}></input>
          <Button text="인증메일 보내기" />
        </FoundBox>
      </FoundInfo>
    </Container>
  );
}

export default FoundModal;

const Container = styled.section`
  position: absolute;
  z-index: 9999;
  height: 70vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & button {
    border: none;
  }
`;
const ButtonWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const CloseBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: transparent;
  font-size: 40px;
  color: white;

  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: #3747ff;
  }
`;

const FoundInfo = styled.div`
  width: 500px;
  height: 500px;
  background-color: #ccc;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FoundBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & input {
    border-radius: 10px;
    transition: all 0.3s;
    border: none;
    outline: none;
    padding: 6px 12px 6px 8px;
    margin-bottom: 10px;
    width: 100%;

    &:focus {
      outline-style: solid;
      outline-color: #d9dcfa;
    }
  }
`;
