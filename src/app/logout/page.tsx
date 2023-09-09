"use client";
import React from "react";
import { auth } from "../lib/firebaseConfig";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../context/auth";
import Container from "../components/Container";
import Button from "../components/atoms/Button";
import { signIn, signOut } from "next-auth/react";

const page = () => {
  const router = useRouter();
  const { isAuth, setIsAuth } = useAuthContext();

  const logout = () => {
    signOut();
    router.push("/login");
    setIsAuth(false);
  };
  return (
    <Container half>
      <div>
        <h1 className="text-center  text-gray-500 font-bold text-xl p-5">
          ログアウトする
        </h1>

        <Button onClick={logout}>ログアウト</Button>
      </div>
    </Container>
  );
};

export default page;
