import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { db } from "../firebase";
import styled from "styled-components";

const StDeletButton = styled.button`
  position: absolute;
  top: 1%;
  right: 1%;
  border: 0px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`;
const Writeitem = ({ todo, setTodos }) => {
  // const updateTodo = async (event) => {
  //   const todoRef = doc(db, "todos", todo.id);
  //   await updateDoc(todoRef, { ...todo, isDone: !todo.isDone });

  //   setTodos((prev) => {
  //     return prev.map((element) => {
  //       if (element.id === todo.id) {
  //         return { ...element, isDone: !element.isDone };
  //       } else {
  //         return element;
  //       }
  //     });
  //   });
  // };

  const deleteTodo = async (event) => {
    const todoRef = doc(db, "todos", todo.id);
    await deleteDoc(todoRef);

    setTodos((prev) => {
      return prev.filter((element) => element.id !== todo.id);
    });
  };

  return (
    <div key={todo.id}>
      <span>
        {todo.text}
        {/* <button onClick={updateTodo}>{todo.isDone ? "취소" : "완료"}</button> */}
        <StDeletButton onClick={deleteTodo}>X</StDeletButton>
      </span>
    </div>
  );
};

export default Writeitem;
