import { styled } from "styled-components";
import * as Basic from "assets/BasicStyle";

export const MyapgeImgWrap = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;
export const MypageImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MypageLabel = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  cursor: pointer;
  transition: all 0.1s;
  outline-width: 0;
  outline-style: solid;
  outline-color: ${Basic.mainColor.light};
  border-radius: 50%;
  &:hover {
    outline-width: 4px;
  }
  &:focus,
  &:active {
    outline-width: 4px;
  }
`;
export const MypageInput = styled.input`
  width: 0;
  height: 0;
  position: absolute;
`;

export const MypageModal = styled.div`
  overlay {
    background-color: red;
  }
`;
