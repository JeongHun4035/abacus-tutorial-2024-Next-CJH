"use client";
import React from "react";
import "@/styles/sign-in.css";
import { useRouter } from "next/navigation";
import { supabase } from "@/middleware/supabase";

const SignIn = () => {
  const router = useRouter();

  const goMain = () => {
    router.push("/");
  };

  const createSessionStorage = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("user", "test");
    }
  };

  const trySignIn = async () => {
    try {
      const { data } = await supabase.auth.signInWithPassword({
        email: "user@example.com",
        password: "1234",
      });
      console.log(data);
      goMain();
      createSessionStorage();
    } catch (error) {
      console.error(error);
    }
  };

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
        <input placeholder="Input your Password" minLength={8} maxLength={16} />
      </div>
      <div className="sign-in-forgot-service">
        <button>forgot ID or Password ?</button>
      </div>
      <div className="sign-in-button-area">
        <button className="sign-in-button" onClick={trySignIn}>
          Sign in
        </button>
      </div>
      <button> Join in the membership </button>
    </div>
  );
};
export default SignIn;
