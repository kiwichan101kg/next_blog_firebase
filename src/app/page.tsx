"use client";
import { useEffect, useState } from "react";
import { getPosts } from "./api";
import Container from "./components/Container";
import FlexBox from "./components/FlexBox";

type PostContent = {
  title: string;
  text: string;
  date: { seconds: number; nanoseconds: number };
};

export default function Home() {
  const [postContents, setPostContent] = useState<any[] | undefined>(undefined);
  useEffect(() => {
    const setPosts = async () => {
      const data = await getPosts();
      setPostContent(data);
    };
    setPosts();
  }, []);
  // const res = await getPosts();
  const handleGet = async () => {
    await getPosts();
  };
  return (
    <div>
      <Container>
        <FlexBox>
          {postContents?.map((content) => (
            <div className=" flex flex-col w-full m-auto bg-white p-4 m-4 rounded-sm">
              <h2>{content.title}</h2>
              <p>{content.text}</p>
            </div>
          ))}
        </FlexBox>
      </Container>
    </div>
  );
}
