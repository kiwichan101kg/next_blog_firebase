"use client";
import { getPostBySlug, getPosts } from "@/app/api";
import Container from "@/app/components/Container";
import FlexBox from "@/app/components/FlexBox";
import Preview from "@/app/posts/Preview";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PrevNextPagination from "./PrevNextPagination";

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

  const [allPosts, setAllPosts] = useState<any[]>([]);
  useEffect(() => {
    const setPosts = async () => {
      const data = await getPosts();
      setAllPosts(data);
    };
    setPosts();
  }, []);

  const [prevPost, nextPost] = prevNextPost(allPosts, slug);

  return (
    <Container>
      <FlexBox>
        <Preview title={postContent?.title} body={postContent?.body}></Preview>
        <PrevNextPagination prevPost={prevPost} nextPost={nextPost} />
      </FlexBox>
    </Container>
  );
};

const prevNextPost = (allPosts: any[], currentSlug: string) => {
  const numberOfPosts = allPosts.length;

  // 取得したallpostsの配列の中から、現在のslugと一致するものの配列のindexを返却する
  const index = allPosts.findIndex((item) => item.post_id === currentSlug);
  console.log(index);

  // 現在の投稿が最初でなければ前の投稿を取得
  const prevPost = index === 0 ? undefined : allPosts[index - 1];
  // 現在の投稿が最後でなければ次の投稿を取得
  const nextPost =
    index + 1 === numberOfPosts ? undefined : allPosts[index + 1];

  return [prevPost, nextPost];
};

export default page;
