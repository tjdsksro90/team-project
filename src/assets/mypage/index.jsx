import { styled } from "styled-components";
import * as Basic from "assets/BasicStyle";

export const MypageBg = styled.div`
  background-color: ${Basic.mainColor.dark};
  width: 100%;
  height: 150px;
  position: absolute;
`;
export const Mypage = styled.div`
  text-align: center;
`;
export const MypageWrap = styled.div`
  width: 250px;
  margin: 0 auto;
  text-align: center;
`;
export const MypageWrapSecond = styled.div`
  width: 450px;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
`;
export const MypageTab = styled.div`
  position: relative;
  text-align: center;
  color: ${Basic.mainColor.dark};
  margin-bottom: 20px;
  font-weight: bold;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 45%;
    height: 1px;
    background-color: ${Basic.mainColor.dark};
  }
  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 45%;
    height: 1px;
    background-color: ${Basic.mainColor.dark};
  }
`;
export const MyapgeImgWrap = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  margin: 0 auto;
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
export const EditButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
export const MypageTxtWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 40px auto;
`;
export const MypageTxt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
  > .title {
    font-size: 16px;
  }
  > .desc {
    font-size: 18px;
    font-weight: bold;
    width: 100%;
  }
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

export const MyItemWrap = styled.div`
  position: relative;
  overflow: hidden;
  /* border: 2px solid black; */
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  margin: 10px 0px;
  word-wrap: break-word;
  display: -webkit-box;
  line-height: 1.2;
  background: #fff;
`;

export const MyItem = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 15px 10px;
  align-items: center;
  > .email {
    font-weight: bold;
    color: ${Basic.mainColor.dark};
  }
  > .date {
    font-size: 12px;
    color: ${Basic.mainColor.gray2};
  }
  > .text {
    width: 100%;
    text-align: left;
  }
`;

export const MyDeleteButton = styled.button`
  position: absolute;
  top: 5%;
  right: 1%;
  border: 0px;
  cursor: pointer;
  font-weight: bold;
  background-color: transparent;
  font-size: 18px;
  transition: all 0.2s;
  &:hover {
    svg {
      path {
        fill: ${Basic.mainColor.basic};
      }
    }
  }
  &:active {
    svg {
      path {
        fill: ${Basic.mainColor.light};
      }
    }
  }
`;

export const MyEditButton = styled.button`
  position: absolute;
  top: 5%;
  right: 6%;
  border: 0px;
  cursor: pointer;
  font-weight: bold;
  background-color: transparent;
  font-size: 18px;
  transition: all 0.2s;
  &:hover {
    svg {
      path {
        fill: ${Basic.mainColor.basic};
      }
    }
  }
  &:active {
    svg {
      path {
        fill: ${Basic.mainColor.light};
      }
    }
  }
`;

export const MyItemEditEmail = styled.div`
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const MyItemEditText = styled.textarea`
  border: 1px solid ${Basic.mainColor.gray2};
  border-radius: 5px;
  min-height: 200px;
  padding: 10px;
  resize: none;
`;
