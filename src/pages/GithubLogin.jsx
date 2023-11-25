import { auth, githubProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

function GithubLogin() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*  const handleGithubLogout = () => {
    setUser(null);
  }; */

  return (
    <div>
      <Github onClick={handleGithubLogin}>
        <img src="" alt="" />
      </Github>
    </div>
  );
}

export default GithubLogin;

const Github = styled.button`
  width: 50px;
`;
