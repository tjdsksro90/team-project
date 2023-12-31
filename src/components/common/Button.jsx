import React from "react";
import styled from "styled-components";
const ButtonWrapper = styled.div`
  margin: 10px 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 250px;
  & button {
    border: 1px solid #cdcdcd;
    color: white;
    background-color: #3747ff;
    border-radius: 24px;
    font-size: 14px;
    font-weight: 700;
    height: 48px;
    letter-spacing: -0.4px;
    width: 100%;
    cursor: pointer;
    transition: all 0.1s ease-out 0s;
    &:hover {
      background-color: white;
      color: #3747ff;
      border: 1px solid #3747ff;
      outline-style: solid;
      outline-color: #d9dcfa;
    }
  }
`;
function Button({ text, onClick = () => {} }) {
  return (
    <div>
      <ButtonWrapper>
        <button onClick={onClick}>{text}</button>
      </ButtonWrapper>
    </div>
  );
}

export default Button;
