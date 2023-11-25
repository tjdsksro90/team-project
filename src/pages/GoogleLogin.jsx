import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

function GoogleLogin() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*   const handleGoogleLogOut = () => {
    setUser(null);
  };
 */
  return (
    <div>
      <GoogleButton onClick={handleGoogleLogin}>
        <img
          src="https://github.com/tjdsksro90/team-project/blob/merge/src/assets/images/google.png?raw=true"
          alt="google"
          width="40px"
        />
      </GoogleButton>
    </div>
  );
}

export default GoogleLogin;

const GoogleButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
