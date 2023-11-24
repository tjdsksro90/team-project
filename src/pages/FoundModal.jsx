import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/common/Button";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";


function FoundModal({ setModal }) {
    const [userEmail, setUserEmail]=useState('')
    const auth = getAuth()
    const getEmailHandler =(e) =>{
        setUserEmail(e.target.value)
    }
    const onFoundHandler = async(e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, userEmail)
        .then(()=>{
            alert("이메일을 확인해 주세요!")
        })
        .catch((error)=>{
            alert("등록되지 않은 이메일입니다." + error.message);
        })
    }

  return (
    <Container>
        <ButtonWrapper>
        <CloseBtn onClick={() => setModal(false)}>닫기 </CloseBtn>
        </ButtonWrapper>
      
      <FoundInfo>
        <FoundBox onSubmit={onFoundHandler}>
          <label>이메일 주소</label>
          <input value={userEmail} type="email" onChange={getEmailHandler}></input>
          <Button text="인증메일 보내기"/>
        </FoundBox>
      </FoundInfo>
    </Container>
  );
}

export default FoundModal;

const Container = styled.section`
  position: absolute;
  z-index: 9999;
  width: 100%;
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
`
const CloseBtn = styled.button`
position: absolute;
    
`

const FoundInfo = styled.div`
  width: 500px;
  height: 500px;
  background-color: #ccc;
  border-radius: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const FoundBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & input{
    margin-bottom: 10px;
    width: 100%;
  }
`;
