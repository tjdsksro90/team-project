import React, { useEffect, useState } from "react";
import Writeitem from "./Writeitem";
import { collection, query, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import styled from "styled-components";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const StInputWrite = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 0px;
  background-color: #bac4cc;
`;
const StWriteWrap = styled.div`
  position: relative;
`;
const StWriteButton = styled.button`
  background-color: #bac4cc;
  border: 0px;
  font-size: 17px;
  position: absolute;
  border-radius: 10px;
  right: -4px;
  top: 0%;
  cursor: pointer;
  padding: 8px;
`;
const StTest = styled.div`
  position: relative;
  overflow: hidden;
  border: 2px solid black;
  border-radius: 20px;
  padding: 20px 10px 10px 10px;
  width: 100%;
  height: 200px;
  margin: 10px;
  word-wrap: break-word;
  display: -webkit-box;
  line-height: 1.2;
  height: 9em;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
`;

const Write = () => {
  const [writes, setWrites] = useState([
    { text: "할 일 1", id: 1 },
    { text: "할 일 2", id: 2 }
  ]);

  // onAuthStateChanged(auth, (user) => {
  //   console.log("user1", user.uid);
  // });
  // 파이어 베이스 데이터 읽기
  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "writes"));
      const querySnapshot = await getDocs(q);

      const initialWrites = [];

      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          ...doc.data()
        };
        // console.log("data", data);
        // console.log("doc", doc);
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
    event.preventDefault();
    const newWrite = { text: text };
    setWrites((prev) => {
      return [...writes, newWrite];
    });
    setText("");

    const collectionRef = collection(db, "writes");
    await addDoc(collectionRef, newWrite);
  };

  return (
    <div>
      <br />
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
      <h3>내용</h3>
      {writes.map((write) => {
        return (
          <StTest>
            <Writeitem key={write.id} write={write} setWrites={setWrites} />
          </StTest>
        );
      })}
    </div>
  );
};

export default Write;