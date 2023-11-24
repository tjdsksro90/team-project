import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import React, { useState } from "react";

function GoogleLogin() {
  const [user, setUser] = useState(null);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoogleLogOut = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <button onClick={handleGoogleLogOut}>google 로그아웃</button>
      ) : (
        <button onClick={handleGoogleLogin}>google 로그인</button>
      )}
    </div>
  );
}

export default GoogleLogin;
