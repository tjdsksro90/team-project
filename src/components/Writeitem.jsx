import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { db } from "../firebase";
import styled from "styled-components";
import { element } from "prop-types";

const StDeletButton = styled.button`
  position: absolute;
  top: 1%;
  right: 1%;
  border: 0px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`;

const StId = styled.input`
  border: 0px;
  font-size: small;
  font-weight: bolder;
  float: left;
`;

const StDate = styled.div`
  display: inline-block;
  float: right;
`;

const Writeitem = ({ write, setWrites }) => {
  const deleteWrite = async (event) => {
    const writeRef = doc(db, "writes", write.id);
    await deleteDoc(writeRef);

    setWrites((prev) => {
      return prev.filter((element) => element.id !== write.id);
    });
  };

  console.log("id", write.id);
  console.log("email", write.email);

  return (
    <div key={write.id}>
      <span>
        <StId value={write.email} disabled></StId>
        <StDate>{write.date}</StDate>
        <br />
        {write.text}
        <StDeletButton onClick={deleteWrite}>X</StDeletButton>
      </span>
    </div>
  );
};

export default Writeitem;
