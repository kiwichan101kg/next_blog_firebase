"use client";
import { signOut } from "@firebase/auth";
import React from "react";
import { auth } from "../lib/firebaseConfig";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../context/auth";

const page = () => {
  const router = useRouter();
  const { isAuth, setIsAuth } = useAuthContext();

  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      router.push("/login");
    });
  };
  return (
    <div>
      <h1>ログアウトする</h1>
      <button
        onClick={logout}
        className="px-2 py-1 bg-white text-blue-500 border border-blue-500 font-semibold rounded hover:bg-blue-100 duration-200 hover:scale-95"
      >
        ログアウト
      </button>
    </div>
  );
};

export default page;
