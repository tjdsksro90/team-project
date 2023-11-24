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
const Writeitem = ({ write, setWrites }) => {
  const deleteWrite = async (event) => {
    const writeRef = doc(db, "writes", write.id);
    await deleteDoc(writeRef);

    setWrites((prev) => {
      return prev.filter((element) => element.id !== write.id);
    });
  };

  return (
    <div key={write.id}>
      <span>
        {write.text}
        <StDeletButton onClick={deleteWrite}>X</StDeletButton>
      </span>
    </div>
  );
};

export default Writeitem;
