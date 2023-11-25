import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import styled from "styled-components";
import * as Styled from "assets/BasicStyle";
import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";

const StDeletButton = styled.button`
  position: absolute;
  top: 1%;
  right: 1%;
  border: 0px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`;
const StEditButton = styled.button`
  position: absolute;
  top: 1%;
  right: 4%;
  border: 0px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`;
// [write.id, write.text, write.date];
const Writeitem = ({ write, setWrites, userInfo }) => {
  const deleteWrite = async (event) => {
    const writeRef = doc(db, "writes", write.id);
    await deleteDoc(writeRef);

    setWrites((prev) => {
      return prev.filter((element) => element.id !== write.id);
    });
  };

  // modal 관련
  const [modalSwitch, setModalSwitch] = useState(false);
  // 게시물 수정 텍스트 확인
  const [writeTextEdit, setWriteTextEdit] = useState("");

  const onChangeText = (event) => {
    setWriteTextEdit(event.target.value);
  };
  // 게시물 수정
  const editWrite = (write) => {
    setModalSwitch(true);
    setWriteTextEdit(write.text);
  };

  // 게시물 수정 취소
  const cancelEditWrite = () => {
    setModalSwitch(false);
  };

  // 게시물 수정 확인
  const submitEditWrite = async () => {
    if (writeTextEdit === write.text) return alert("기존 내용과 같습니다.");

    const writeRef = doc(db, "writes", write.id);
    await updateDoc(writeRef, { text: writeTextEdit });
    setWrites((prev) => {
      return prev.map((element) => {
        if (element.id === write.id) {
          return { ...element, text: writeTextEdit };
        } else {
          return element;
        }
      });
    });

    setModalSwitch(false);
  };
  return (
    <>
      <div key={write.id}>
        <span>
          <input value={write.email} disabled></input> {write.date}
          {/* {write.id} */}
          <br />
          {write.text}
          {userInfo !== null && write.uid === userInfo.uid ? (
            <>
              <StEditButton onClick={() => editWrite(write)}>edit</StEditButton>
              <StDeletButton onClick={deleteWrite}>X</StDeletButton>
            </>
          ) : (
            <div></div>
          )}
        </span>
      </div>
      <Modal
        style={Styled.customModal}
        isOpen={modalSwitch}
        onRequestClose={() => cancelEditWrite()}
        ariaHideApp={false}
      >
        <AiFillCloseCircle
          style={{ color: Styled.mainColor.dark, cursor: "pointer" }}
          onClick={() => cancelEditWrite()}
        />
        <div>{write.email}</div>
        <textarea
          type="text"
          placeholder="변경될 내용을 입력해주세요"
          value={writeTextEdit}
          onChange={onChangeText}
          required
        />
        <button type="button" onClick={submitEditWrite}>
          수정
        </button>
      </Modal>
    </>
  );
};

export default Writeitem;
