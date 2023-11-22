import { IoClose } from "react-icons/io5";
import { LiaEyeSolid } from "react-icons/lia";
import styled from "styled-components";
import { Link } from "react-router-dom/dist";
import Button from "components/common/Button";
import GoogleButton from "GoogleButton";

//form 태그 onsubmit
//input 태그 value, onchange

const Login = () => {
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const GOOGLE_REDIRECT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URI;

  const onGoogleSocialLogin = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=openid email profile`;
  };

  return (
    <Container>
      <LoginWrapper>
        <LogoWrapper>로고박스</LogoWrapper>
        <LoginBox>
          <label htmlFor="">
            <input type="text" placeholder="아이디" />
          </label>
          <label>
            <input type="password" placeholder="비밀번호" />
          </label>
        </LoginBox>
        <ForgetPW>
          <Link to="/">비밀번호 찾기</Link>
        </ForgetPW>
        <Button text="로그인" />
        <JoinandFind>
          <Link to="/">
            <p>회원가입</p>
          </Link>

          <span>ㅣ</span>
          <Link to="/">
            <p>
              <p>아이디 찾기</p>
            </p>
          </Link>
        </JoinandFind>
        <SimpleLogin>
            <GoogleButton/>
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
const CloseBtnBox = styled.div`
  cursor: pointer;
  font-size: 50px;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const LoginWrapper = styled.form`
  margin-top: 120px;
`;

const LogoWrapper = styled.div``;
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  & input {
    background-color: #fff;
    border: 1px solid #cdcdcd;
    margin-top: 8px;
    padding: 13px 73px 13px 16px;
    width: 100%;
  }
`;
const ForgetPW = styled.div`
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.4px;
  line-height: 1.62;
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  & a {
    color: #999;
  }
`;
const JoinandFind = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
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
