import React, { useEffect, useState } from "react";
import Writeitem from "./Writeitem";
import { collection, query, getDocs, addDoc, Timestamp, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import styled from "styled-components";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Test from "./Test";
import moment from "moment/moment";
import { useNavigate } from "react-router";

const StWriteWrap = styled.div`
  position: relative;
`;

const StInputWrite = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding: 0px 10px 0px 10px;
  border: 0px;
  background-color: #bac4cc;
  cursor: pointer;
`;

const StInputWriteBtn = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding: 0px 10px 0px 10px;
  border: 0px;
  background-color: #bac4cc;
`;

const StWriteButton = styled.button`
  background-color: #bac4cc;
  border: 0px;
  font-size: 17px;
  position: absolute;
  border-radius: 10px;
  right: -14px;
  top: 8%;
  cursor: pointer;
  padding: 3px 5px;
`;

const StTest = styled.div`
  position: relative;
  overflow: hidden;
  border: 2px solid black;
  border-radius: 20px;
  padding: 20px 10px 10px 10px;
  width: 100%;
  height: 200px;
  margin: 10px 0px;
  word-wrap: break-word;
  display: -webkit-box;
  line-height: 1.2;
  height: 9em;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
`;

const Write = ({ userInfo }) => {
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
      <br />
      {userInfo === null ? (
        <StInputWriteBtn type="button" onClick={linkLogin}>
          로그인을 해주세요
        </StInputWriteBtn>
      ) : (
        <form>
          <StWriteWrap>
            <StInputWrite
              type="text"
              value={text}
              name="text"
              onChange={onChange}
              placeholder="내용을 입력해주세요"
              required
            ></StInputWrite>
            <StWriteButton onClick={addWrite}>입력</StWriteButton>
          </StWriteWrap>
        </form>
      )}
      <h3>내용</h3>
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
