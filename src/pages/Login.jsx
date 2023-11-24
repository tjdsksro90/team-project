import styled from "styled-components";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import Button from "components/common/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom/dist";
import { loginUser } from "redux/modules/user";
import FoundModal from "pages/FoundModal";
import GithubLogin from "./GithubLogin";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [modal, setModal] = useState(false);
  const auth = getAuth();

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
  /* 
1.리덕스는 데이터베이스에 직접저장X 새로고침하면 데이터 사라짐, 방지하는 방법 : redux-persist <저장한 값을 휘발되지 않도록 막아줌 
2.firebase auth =>로그인을 한 상태인지 안한상태인지 체크하는 api , 라우터 최상단에 로그인이 된유저인지 아닌지 검증 
로그인 시도했을 때 < 

*/
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

          <button onClick={() => setModal(true)}>비밀번호 찾기</button>

          {modal === true ? <FoundModal setModal={setModal} /> : null}
        </JoinandFind>
        <SocialLoginBox>
        <GithubLogin/>
          <GoogleLogin/>

        </SocialLoginBox>
          
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
const SocialLoginBox = styled.div`
  margin-top: 12px;
  display: flex;
`