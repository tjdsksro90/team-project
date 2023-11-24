import { auth, githubProvider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'

function GithubLogin() {
 const [user, setUser]=useState(null)

 const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider).then((result)=>{
        setUser(result.user)
    }).catch((err)=>{
        console.log(err)
    })
 }

 const handleGithubLogout = () => {
    setUser(null)
 }

  return (
    <div>
      {user ? (
        <button onClick={handleGithubLogout}>Github 로그아웃</button>
      ):(
        <button onClick={handleGithubLogin}>Github 로그인</button>
      )}
    </div>
  )
}

export default GithubLogin
