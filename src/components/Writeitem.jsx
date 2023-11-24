import React from "react";

const Writeitem = ({ todo, setTodos }) => {
  const updateTodo = (event) => {
    setTodos((prev) => {
      return prev.map((element) => {
        if (element.id === todo.id) {
          return { ...element, isDone: !element.isDone };
        } else {
          return element;
        }
      });
    });
  };

  const deleteTodo = (event) => {
    setTodos((prev) => {
      return prev.filter((element) => element.id !== todo.id);
    });
  };

  return (
    <div key={todo.id}>
      <span>{todo.text}</span>
      <button onClick={updateTodo}>{todo.isDone ? "취소" : "완료"}</button>
      <button onClick={deleteTodo}>삭제!</button>
    </div>
  );
};

export default Writeitem;
