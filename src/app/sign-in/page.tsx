'use client'
import React from "react";
import '@/styles/sign-in.css'
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter()

  // const loginCheckAPI
  const createSession = () => {
    sessionStorage.setItem('user', 'test');
    router.push('/')
  }


  return (
      <div className="sign-in-container">
        <div>
          <label>ID</label>
          <input
            placeholder="Input your Identify Document"
            />
        </div>
        <div>
          <label>Password</label>
          <input
            placeholder="Input your Password"
            />
        </div>
        <div className="sign-in-forgot-service">
          <button>forgot ID or Password ?</button>
        </div>
        <div className="sign-in-button-area">
          <button className="sign-in-button" onClick={createSession}> Sign in </button>
        </div>
        <button> Join in the membership </button>
      </div>
  )
}
export default SignIn