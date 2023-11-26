import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import styled from "styled-components";
import * as Styled from "assets/BasicStyle";
import Modal from "react-modal";
import { AiFillCloseCircle, AiFillEdit, AiOutlineDelete } from "react-icons/ai";

const StDeletButton = styled.button`
  position: absolute;
  top: 5%;
  right: 1%;
  border: 0px;
  cursor: pointer;
  font-weight: bold;
  background-color: transparent;
  font-size: 18px;
  transition: all 0.2s;
  &:hover {
    svg {
      path {
        fill: ${Styled.mainColor.basic};
      }
    }
  }
  &:active {
    svg {
      path {
        fill: ${Styled.mainColor.light};
      }
    }
  }
`;
const StEditButton = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  border: 0px;
  cursor: pointer;
  font-weight: bold;
  background-color: transparent;
  font-size: 18px;
  transition: all 0.2s;
  &:hover {
    svg {
      path {
        fill: ${Styled.mainColor.basic};
      }
    }
  }
  &:active {
    svg {
      path {
        fill: ${Styled.mainColor.light};
      }
    }
  }
`;

const StItemWrap = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 15px 10px;
  align-items: center;
  > .email {
    font-weight: bold;
    color: ${Styled.mainColor.dark};
  }
  > .date {
    font-size: 12px;
    color: ${Styled.mainColor.gray2};
  }
  > .text {
    width: 100%;
  }
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
        <StItemWrap>
          <p className="email">{write.email}</p>
          <p className="date">{write.date}</p>
          <p className="text">{write.text}</p>
          {userInfo !== null && write.uid === userInfo.uid ? (
            <div>
              <StEditButton onClick={() => editWrite(write)}>
                <AiFillEdit />
              </StEditButton>
              <StDeletButton onClick={deleteWrite}>
                <AiOutlineDelete />
              </StDeletButton>
            </div>
          ) : (
            <div></div>
          )}
        </StItemWrap>
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
