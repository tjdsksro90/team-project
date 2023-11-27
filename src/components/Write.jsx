import React, { useEffect, useState } from "react";
import Writeitem from "./Writeitem";
import { collection, query, getDocs, addDoc, Timestamp, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import styled from "styled-components";
import * as Styled from "assets/BasicStyle";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Test from "./Test";
import moment from "moment/moment";
import { useNavigate } from "react-router";
import { AiOutlineSearch } from "react-icons/ai";
import { useRef } from "react";

const StWriteTop = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

const StWriteWrap = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

const StInputWrite = styled.input`
  flex: 1;
  height: 40px;
  border-radius: 10px;
  border: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Styled.mainColor.gray2};
  outline: none;
  font-size: 13px;
  background-color: ${Styled.mainColor.gray1};
  color: #000;
  padding: 6px 40px 6px 12px;
  border-radius: 10px;
  transition: all 0.3s;
  cursor: pointer;
  outline-style: solid;
  outline-color: transparent;
  &:hover {
    outline-style: solid;
    outline-color: ${(props) => (props.line === "line" ? Styled.mainColor.light : Styled.mainColor.light)};
  }
  &:focus {
    outline-style: solid;
    outline-color: ${(props) => (props.line === "line" ? Styled.mainColor.light : Styled.mainColor.light)};
  }
`;

const StInputWriteBtn = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Styled.mainColor.gray2};
  outline: none;
  font-size: 13px;
  background-color: ${Styled.mainColor.gray1};
  color: #000;
  padding: 6px 12px 6px 12px;
  border-radius: 10px;
  transition: all 0.3s;
  cursor: pointer;
  outline-style: solid;
  outline-color: transparent;
  margin-bottom: 30px;
  &:hover {
    outline-style: solid;
    outline-color: ${(props) => (props.line === "line" ? Styled.mainColor.light : Styled.mainColor.light)};
  }
  &:focus {
    outline-style: solid;
    outline-color: ${(props) => (props.line === "line" ? Styled.mainColor.light : Styled.mainColor.light)};
  }
`;

const StWriteButton = styled.button`
  background-color: transparent;
  border: 0px;
  font-size: 17px;
  position: absolute;
  border-radius: 10px;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 3px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StTest = styled.div`
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
  height: 9em;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  background: #fff;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background: rgb(255, 255, 255);
    background: -moz-linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    background: -webkit-linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ffffff",GradientType=1);
  }
`;

const Write = ({ userInfo, profileImg }) => {
  const navigate = useNavigate();
  const [writes, setWrites] = useState([]);

  // 파이어 베이스 데이터 읽기
  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "writes"), orderBy("fullDate", "desc"));
      const querySnapshot = await getDocs(q);

      const initialWrites = [];

      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          ...doc.data()
        };

        initialWrites.push(data);
      });
      setWrites(initialWrites);
    };
    fetchData();
  }, []);

  const [text, setText] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value }
    } = event;
    if (name === "text") {
      setText(value);
    }
  };

  // 파이어 베이스 데이터 추가
  const addWrite = async (event) => {
    const formatDate = moment().format("YYYY-MM-DD");
    const formatFullDate = moment().format("YYYY-MM-DD HH-mm-ss.SSS");
    event.preventDefault();
    if (text === "") {
      alert("내용을 입력해주세요");
    } else {
      const newWrite = {
        email: auth.currentUser.email,
        text: text,
        date: formatDate,
        fullDate: formatFullDate,
        uid: auth.currentUser.uid
      };
      const collectionRef = collection(db, "writes");
      const a = await addDoc(collectionRef, newWrite);
      setWrites((prev) => {
        return [{ ...newWrite, id: a.id }, ...writes];
      });
      setText("");
    }
  };

  // 유저 정보 유무 파악
  const linkLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <StWriteTop>오늘 할 이야기가 뭔가요?</StWriteTop>
      {userInfo === null ? (
        <StInputWriteBtn onClick={linkLogin} placeholder="로그인을 해주세요" />
      ) : (
        <form>
          <StWriteWrap>
            <Styled.RountImg>
              <Styled.ImgWidth src={profileImg} alt="" />
            </Styled.RountImg>
            <StInputWrite
              type="text"
              value={text}
              name="text"
              onChange={onChange}
              placeholder="내용을 입력해주세요"
              required
            ></StInputWrite>
            <StWriteButton onClick={addWrite}>
              <AiOutlineSearch />
            </StWriteButton>
          </StWriteWrap>
        </form>
      )}
      {writes.map((write) => {
        return (
          <StTest>
            <Writeitem key={write.id} write={write} setWrites={setWrites} userInfo={userInfo} />
          </StTest>
        );
      })}
    </div>
  );
};

export default Write;
