'use client'
import React from "react";
import '@/styles/sign-in.css'

const SignIn = () => {
  const createSession = () => {
    sessionStorage.setItem('key', 'test');
  }

  return (
    <>
      <div className="sign-in-container">
        <div>
          <div>
            <label>ID</label>
          </div>
          <input
            placeholder="Input your Identify Document"
          />
          <div>
            <span>If forgot your ID? <button>Yes, I would find ID</button></span>
          </div>
          <div>
            <label>Password</label>
          </div>
          <input
            placeholder="Input your Password"
          />
          <div>
            <span>If forgot your Password? <button>Yes, I would find Password</button></span>
          </div>
        </div>
        <button className="sign-in-button" onClick={createSession}> Sign in </button>
        <button className="sign-in-button"> Join in the membership </button>
      </div>
    </>
  )
}
export default SignIn