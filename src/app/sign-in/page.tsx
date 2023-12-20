'use client'
import React from "react";
import '@/styles/sign-in.css'
import { useRouter } from "next/navigation";
const SignIn = () => {
  const router = useRouter()

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
            minLength={3}
            maxLength={12}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            placeholder="Input your Password"
            minLength={8}
            maxLength={16}
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