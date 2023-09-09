import React from "react";
import { signIn, signOut } from "next-auth/react";
import Button from "../components/atoms/Button";
import FlexBox from "../components/FlexBox";

const ExternalLogin = () => {
  return (
    <>
      <FlexBox>
        <h1 className="text-center  text-gray-500 font-bold text-md">
          外部サービスからログイン
        </h1>
        <Button onClick={() => signIn()}>Googleでログイン</Button>
        <Button onClick={() => signIn()}>Githubでログイン</Button>
      </FlexBox>
    </>
  );
};

export default ExternalLogin;
