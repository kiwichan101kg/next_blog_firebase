"use client";
import { signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth, provider } from "../lib/firebaseConfig";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../context/auth";
import Container from "../components/Container";
import LoginForm from "./LoginForm";

const page = () => {
  const router = useRouter();
  const { isAuth, setIsAuth } = useAuthContext();
  console.log("isAuth", isAuth);

  // Googleでログイン
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", "true");
      setIsAuth(true);
      router.push("/");
      console.log(result);
    });
  };
  return (
    <>
      <Container half>
        <h1 className="text-center  text-gray-500 font-bold text-xl p-5">
          ログインで始める
        </h1>

        <LoginForm />

        <div className="flex justify-center">
          <button
            onClick={loginWithGoogle}
            className="w-full px-2 py-1 my-6 bg-white text-blue-500 border border-blue-500 font-semibold rounded hover:bg-blue-100 duration-200 hover:scale-95"
          >
            Googleでログイン
          </button>
        </div>
      </Container>
    </>
  );
};

export default page;
