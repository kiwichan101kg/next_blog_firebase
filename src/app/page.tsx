"use client";
import { useEffect, useState } from "react";
import { getPosts } from "./api";
import Container from "./components/Container";
import FlexBox from "./components/FlexBox";
import PostContent from "./PostContent";

export default function Home() {
  const [postContents, setPostContent] = useState<any[] | undefined>(undefined);
  useEffect(() => {
    const setPosts = async () => {
      const data = await getPosts();
      setPostContent(data);
    };
    setPosts();
  }, []);
  return (
    <div>
      <Container>
        <FlexBox>
          {postContents?.map((content) => (
            <PostContent
              key={String(content.createdAt.seconds)}
              {...content}
            ></PostContent>
          ))}
        </FlexBox>
      </Container>
    </div>
  );
}
