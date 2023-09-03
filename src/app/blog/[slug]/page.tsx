"use client";
import { getPostBySlug } from "@/app/api";
import Container from "@/app/components/Container";
import FlexBox from "@/app/components/FlexBox";
import React, { useEffect, useState } from "react";

type PostSlug = {
  params: { slug: string };
};

const page = ({ params: { slug } }: PostSlug) => {
  const [postContent, setPostContent] = useState<any | undefined>(undefined);
  useEffect(() => {
    const setPosts = async () => {
      const data = await getPostBySlug(slug);
      setPostContent(data);
    };
    setPosts();
  }, []);

  console.log(postContent);

  return (
    <Container>
      <FlexBox>
        <h1 className="font-bold text-4xl">{postContent?.title}</h1>
        <div>{postContent?.body}</div>
      </FlexBox>
    </Container>
  );
};

export default page;
