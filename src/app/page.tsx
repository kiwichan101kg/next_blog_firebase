"use client";
import { useSession } from "next-auth/react";
import Container from "./components/Container";
import FlexBox from "./components/FlexBox";
import PostList from "./components/PostList";

export default function Home() {
  const { data: session } = useSession();
  console.log("セッション", session);
  return (
    <div>
      <Container>
        <FlexBox>
          <PostList />
        </FlexBox>
      </Container>
    </div>
  );
}
