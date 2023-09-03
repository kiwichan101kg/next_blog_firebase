"use client";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import Container from "../components/Container";
import LoginForm from "./LoginForm";

const page = () => {
  return (
    <>
      <Container half>
        <h1 className="text-center  text-gray-500 font-bold text-xl p-5">
          ログインで始める
        </h1>
        <LoginForm />
      </Container>
    </>
  );
};

export default page;
