import React, { useEffect, useState } from "react";
import Writeitem from "./Writeitem";
import { collection, query, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import styled from "styled-components";

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
  /* white-space: normal; */
  word-wrap: break-word;
  display: -webkit-box;
  line-height: 1.2;
  height: 9em;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
`;

const Write = () => {
  const [todos, setTodos] = useState([
    { text: "할 일 1", id: 1 },
    { text: "할 일 2", id: 2 }
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "todos"));
      const querySnapshot = await getDocs(q);

      const initialTodos = [];

      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          ...doc.data()
        };
        initialTodos.push(data);
      });
      setTodos(initialTodos);
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

  const addTodo = async (event) => {
    event.preventDefault();
    const newTodo = { text: text };
    setTodos((prev) => {
      return [...todos, newTodo];
    });
    setText("");

    const collectionRef = collection(db, "todos");
    await addDoc(collectionRef, newTodo);
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
          <StWriteButton onClick={addTodo}>입력</StWriteButton>
        </StWriteWrap>
      </form>
      <h3>내용</h3>
      {todos
        // .filter((todo) => !todo.isDone)
        .map((todo) => {
          return (
            <StTest>
              <Writeitem key={todo.id} todo={todo} setTodos={setTodos} />
            </StTest>
          );
        })}

      {/* <h3>Done</h3>
      {todos
        .filter((todo) => todo.isDone)
        .map((todo) => {
          return <Writeitem key={todo.id} todo={todo} setTodos={setTodos} />;
        })} */}
    </div>
  );
};

export default Write;
