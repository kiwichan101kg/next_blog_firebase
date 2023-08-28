"use client";
import { signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth, provider } from "../lib/firebaseConfig";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../context/auth";
import Container from "../components/Container";

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
      <Container>
        <h1>ログインで始める</h1>
        <button
          onClick={loginWithGoogle}
          className="px-2 py-1 bg-white text-blue-500 border border-blue-500 font-semibold rounded hover:bg-blue-100 duration-200 hover:scale-95"
        >
          Googleでログイン
        </button>
      </Container>
    </>
  );
};

export default page;
