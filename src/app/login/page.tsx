"use client";
import React from "react";
import Container from "../components/Container";
import LoginForm from "./LoginForm";
import { useSession } from "next-auth/react";
import ExternalLogin from "./ExternalLogin";
import SetGap from "../components/SetGap";

const page = () => {
  return (
    <>
      <Container half>
        <SetGap gapValue="12">
          <LoginForm />
          <ExternalLogin />
        </SetGap>
      </Container>
    </>
  );
};

export default page;
