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
// [write.id, write.text, write.date];
const Writeitem = ({ write, setWrites }) => {
  const deleteWrite = async (event) => {
    console.log("write", write);
    const writeRef = doc(db, "writes", write.id);
    await deleteDoc(writeRef);

    setWrites((prev) => {
      return prev.filter((element) => element.id !== write.id);
    });
  };

  return (
    <div key={write.id}>
      <span>
        <input value={write.email} disabled></input> {write.date}
        {/* {write.id} */}
        <br />
        {write.text}
        <StDeletButton onClick={deleteWrite}>X</StDeletButton>
      </span>
    </div>
  );
};

export default Writeitem;
