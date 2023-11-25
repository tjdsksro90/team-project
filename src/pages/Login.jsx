import styled from "styled-components";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import Button from "components/common/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom/dist";
import { loginUser } from "redux/modules/user";
import FoundModal from "pages/FoundModal";
import GithubLogin from "./GithubLogin";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
  const navigate = useNavigate();

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
      navigate("/");
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
        <LogoWrapper>
          <h1>
            <Link to="/">
              <svg width="1108" height="679" viewBox="0 0 1108 679" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M461.309 513.518C454.909 497.118 441.975 442.351 436.309 417.018C388.309 457.818 338.309 467.351 319.309 467.018C239.309 459.018 201.309 403.018 199.809 347.518C198.309 292.018 227.309 228.518 319.309 219.018C392.909 211.418 432.975 278.185 443.809 312.518C449.642 318.518 464.909 359.418 479.309 475.018C493.709 590.618 608.642 648.185 664.309 662.518C724.309 681.351 870.009 698.818 972.809 618.018C1101.31 517.018 1106.31 389.518 1107.81 330.518C1109.31 271.518 1061.81 164.018 1034.31 127.518C1006.81 91.018 896.809 -1.48197 757.309 0.0180291C645.709 1.21803 571.142 53.8514 547.809 80.018C558.642 92.6847 586.109 124.618 609.309 151.018C632.509 177.418 651.309 238.018 657.809 265.018C657.809 244.018 719.309 207.378 766.809 211.518C875.809 221.018 895.309 307.018 896.809 338.518C898.309 370.018 879.309 475.018 757.309 475.018C635.309 475.018 636.809 296.518 628.809 265.018C620.809 233.518 624.809 224.518 559.309 127.518C506.909 49.918 393.809 24.1847 343.809 21.018C304.975 16.1846 203.709 25.918 109.309 103.518C14.9087 181.118 -2.69132 303.185 0.308682 354.518C2.14202 400.351 26.5087 510.618 109.309 585.018C192.109 659.418 300.142 669.685 343.809 665.518C447.809 655.518 519.309 603.518 519.309 603.518C494.109 593.918 470.142 539.518 461.309 513.518Z"
                  fill="black"
                />
              </svg>
            </Link>
          </h1>
          <p>로그인</p>
        </LogoWrapper>
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

          <PassWordBtn onClick={() => setModal(true)}>비밀번호 찾기</PassWordBtn>

          {modal === true ? <FoundModal setModal={setModal} /> : null}
        </JoinandFind>
        <SocialLoginBox>
          <GithubLogin />
          <GoogleLogin />
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
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoWrapper = styled.div`
  p {
    text-align: center;
    font-size: 28px;
    margin: 20px 0;
  }
  h1 {
    width: 120px;
    height: 40px;
    font-size: 10px;
    a {
      width: 100%;
      height: 100%;
      svg {
        width: 100%;
        height: 100%;
        path {
          fill: #1e29ab;
        }
      }
    }
  }
`;
const LoginBox = styled.form`
  display: flex;
  flex-direction: column;
  & input {
    background-color: #fff;
    border: 1px solid #cdcdcd;
    margin-top: 8px;
    padding: 13px 73px 13px 16px;
    width: 250px;
    border: none;
    outline: none;
    border-radius: 10px;
    transition: all 0.3s;
    &:focus {
      outline-style: solid;
      outline-color: #d9dcfa;
    }
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
  transition: all 0.3s;
  & a {
    text-decoration: none;
  }
  & p {
    cursor: pointer;
    color: black;
    &:hover {
      color: #3747ff;
    }
  }
`;
const SocialLoginBox = styled.div`
  margin-top: 12px;
  display: flex;
`;

const PassWordBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #3747ff;
  }
`;
