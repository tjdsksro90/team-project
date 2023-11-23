import styled from "styled-components";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import Button from "components/common/Button";
import GoogleButton from "components/common/GoogleButton";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/dist";
import { loginUser } from "redux/modules/user";
import FoundModal from "components/common/FoundModal";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [modal, setModal] = useState(false)
  const auth = getAuth();
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const GOOGLE_REDIRECT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URI;

  const onGoogleSocialLogin = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=openid email profile`;
  };

  const dispatch = useDispatch();
  

  const onChangeHanlder = (e) => {
    const {
      target: { name, value }
    } = e;
    if (name === "email") setUserId(value);
    if (name === "password") setUserPassword(value);
  };

  const onLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, userId, userPassword);
      dispatch(loginUser(userCredential.user));
      alert("로그인 되었습니다");
    } catch (error) {
      alert("로그인 실패: " + error.message);
    }
    setUserId("");
    setUserPassword("");
  };

  return (
    <Container>
      <LoginWrapper>
        <LogoWrapper>로그인</LogoWrapper>
        <LoginBox onSubmit={onLoginSubmit}>
          <label>
            <input type="email" value={userId} onChange={onChangeHanlder} name="email" placeholder="아이디" />
          </label>
          <label>
            <input
              type="password"
              value={userPassword}
              onChange={onChangeHanlder}
              autoComplete="off"
              placeholder="비밀번호"
              name="password"
            />
          </label>

          <ButtonWrapper>
            <Button text="로그인" type="submit" />
          </ButtonWrapper>
        </LoginBox>
        <JoinandFind>
          <Link to="/register">
            <p>회원가입</p>
          </Link>

          <span>ㅣ</span>

          
            <button onClick={()=>setModal(true)}>비밀번호 찾기</button>
          
          {modal === true ? <FoundModal setModal={setModal}/>: null}
        </JoinandFind>
        <SimpleLogin>
          <GoogleButton />
        </SimpleLogin>
      </LoginWrapper>
    </Container>
  );
};
export default Login;

const Container = styled.section`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
`;

const LoginWrapper = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoWrapper = styled.div``;
const LoginBox = styled.form`
  display: flex;
  flex-direction: column;
  & input {
    background-color: #fff;
    border: 1px solid #cdcdcd;
    margin-top: 8px;
    padding: 13px 73px 13px 16px;
    width: 250px;
  }
`;

const ButtonWrapper = styled.div`
  margin: 0 auto;
`;

const JoinandFind = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.4px;
  line-height: 1.62;
  & p {
    cursor: pointer;
    color: black;
  }
  & span {
    margin: 0 8px;
  }
`;

const SimpleLogin = styled.form``;
