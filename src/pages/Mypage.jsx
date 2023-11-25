import React, { useEffect, useState } from "react";
import * as Styled from "assets/BasicStyle";
import * as MypageStyled from "assets/mypage/index";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { useNavigate } from "react-router";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { async } from "q";
import { collection, getDocs, query, where } from "firebase/firestore";
import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";

function Mypage() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
      if (user === null) return navigate("/"); // 비로그인시 로그인페이지로
      else {
        // signIn();
        setUserId(user.uid);
        setProfileEmail(user.email);
        setProfileName(user.displayName);
        setProfileImg(user.photoURL);
        //   if (user !== null) {
        //     const displayName = user.displayName;
        // const email = user.email;
        // const photoURL = user.photoURL;
        // const emailVerified = user.emailVerified;
        // const uid = user.uid;
        //   }
      }
    });
    // const user = auth.currentUser
  }, []);

  // 로그인
  // const signIn = async (event) => {
  //   // event.preventDefault();
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(auth, "tjdsksro90@gmail.com", "as1257845");
  //     console.log(userCredential, "userCredential");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // 사용자 프로필 업데이트
  const updateProfileHandler = async (editName, downloadURL) => {
    try {
      const userCredential = await updateProfile(auth.currentUser, {
        displayName: editName,
        photoURL: downloadURL
      });
      setProfileName(editName);
      setProfileImg(downloadURL);
      console.log(userCredential, "userCredential");
    } catch (error) {
      console.error(error);
    }
  };

  const [userId, setUserId] = useState(auth.currentUser != null ? auth.currentUser.uid : null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [profileImg, setProfileImg] = useState(auth.currentUser != null ? auth.currentUser.photoURL : null);
  const [profileEmail, setProfileEmail] = useState(auth.currentUser != null ? auth.currentUser.email : null);
  const [profileName, setProfileName] = useState(auth.currentUser != null ? auth.currentUser.displayName : null);

  const handleFileSelect = async (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    return new Promise((resolve) => {
      reader.onload = () => {
        setProfileImgChange(reader.result);
        setProfileImg(event.target.files[0]);
        resolve();
      };
    });
  };

  // 프로필 수정 접근
  const [desc, setDesc] = useState("");
  const [profileImgChange, setProfileImgChange] = useState(profileImg);

  const editProfileHandler = () => {
    setDesc(profileName == null ? "" : profileName);
    setProfileImgChange(profileImg == null ? "" : profileImg);
    setModalSwitch(true);
  };

  // 프로필 수정 확인
  const editProfileChange = async () => {
    // ref 함수를 이용해서 Storage 내부 저장할 위치를 지정하고, uploadBytes 함수를 이용해서 파일을 저장합니다.
    // const imageRef = ref(storage, `profile/${auth.currentUser.uid}/${selectedFile.name}`);
    const imageRef = ref(storage, `profile/${auth.currentUser.uid}/${selectedFile.name}`);
    await uploadBytes(imageRef, selectedFile);

    // 파일 URL 가져오기
    const downloadURL = await getDownloadURL(imageRef);
    updateProfileHandler(desc, downloadURL);

    console.log(auth.currentUser, "<<<<<<<<<<auth.currentUser<<<<<<<<<<<<");

    setModalSwitch(false);
  };

  // 이름 인풋
  const changeHandler = (e) => {
    setDesc(e.target.value);
  };

  const editProfileCancel = () => {
    setProfileImg(profileImg == null ? "" : profileImg);
    setProfileName(profileName == null ? "" : profileName);
    setModalSwitch(false);
  };

  ///////

  // 내 게시물 확인
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "todos"));
      const querySnapshot = await getDocs(q);
      const initialTodos = [];
      querySnapshot.forEach((doc) => {
        console.log(doc, "docccccccccccccc");
        initialTodos.push({ id: doc.id, ...doc.data() });
      });

      // firestore에서 가져온 데이터를 state에 전달
      setTodos(initialTodos);
    };

    fetchData();
  }, []);

  // modal 관련
  const [modalSwitch, setModalSwitch] = useState(false);

  return (
    <Styled.BoxWrapBg>
      <Styled.BoxWrapBasic>
        <div>
          <div>배경</div>
          <div>
            <MypageStyled.MyapgeImgWrap>
              <MypageStyled.MypageImg>
                <Styled.ImgWidth src={profileImg} alt="" />
              </MypageStyled.MypageImg>
            </MypageStyled.MyapgeImgWrap>

            <div>이메일 : {profileEmail}</div>
            <div>닉네임 : {profileName}</div>
          </div>
          <Styled.BoxBtn type="button" onClick={editProfileHandler}>
            프로필 수정
          </Styled.BoxBtn>
        </div>
        <div>
          <div>
            <button type="button">게시글</button>
            <button type="button">답글</button>
            <button type="button">보관함</button>
          </div>
          <ul>
            {todos
              .filter((todo) => todo.id === `"${userId}"`)
              .map((todo, index) => (
                <li key={index}>{todo.text}</li>
              ))}
          </ul>
        </div>
      </Styled.BoxWrapBasic>
      <Modal
        style={Styled.customModal}
        isOpen={modalSwitch}
        onRequestClose={() => editProfileCancel()}
        ariaHideApp={false}
      >
        <AiFillCloseCircle
          style={{ color: Styled.mainColor.dark, cursor: "pointer" }}
          onClick={() => editProfileCancel()}
        />
        <div>
          <div>배경</div>
          <div>
            <div>
              <h2>프로필</h2>
            </div>
            <MypageStyled.MyapgeImgWrap>
              <MypageStyled.MypageImg>
                <MypageStyled.MypageLabel htmlFor="profileInput"></MypageStyled.MypageLabel>
                <MypageStyled.MypageInput id="profileInput" type="file" onChange={handleFileSelect} />
                <Styled.ImgWidth src={profileImgChange} alt="" />
              </MypageStyled.MypageImg>
            </MypageStyled.MyapgeImgWrap>

            <div>이메일 : {profileEmail}</div>
            <div>
              닉네임 :
              <input
                type="text"
                placeholder="닉네임"
                color={Styled.mainColor}
                value={desc}
                onChange={changeHandler}
                maxLength={20}
              />
            </div>
            <div>한마디</div>
          </div>
          <Styled.BoxBtn type="button" onClick={editProfileChange}>
            저장
          </Styled.BoxBtn>
          <Styled.BoxBtn line="line" type="button" onClick={editProfileCancel}>
            취소
          </Styled.BoxBtn>
        </div>
      </Modal>
    </Styled.BoxWrapBg>
  );
}

export default Mypage;
