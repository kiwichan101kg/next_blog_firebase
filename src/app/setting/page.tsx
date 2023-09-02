import React from "react";
import Container from "../components/Container";
import UserInfoForm from "./UserInfoForm";

const page = () => {
  return (
    <Container half>
      <h1 className="text-center text-gray-500 font-bold text-xl p-5">
        アカウント情報
      </h1>
      <UserInfoForm />
    </Container>
  );
};

export default page;
