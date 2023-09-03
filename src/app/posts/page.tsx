"use client";
import React, { ChangeEvent, useState } from "react";
import { addPosts, getPosts } from "../api";
import { useRouter } from "next/navigation";
import Container from "../components/Container";
import Button from "../components/atoms/Button";
import TextLabel from "../components/atoms/TextLabel";
import TextInput from "../components/atoms/TextInput";
import TextArea from "../components/atoms/TextArea";
import FlexBox from "../components/FlexBox";
import { useAuthContext } from "../context/auth";
import Preview from "./Preview";

// inputの中身を取得する⇨DBに保存する

const page = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const { isAuth } = useAuthContext();

  const handlePost = async () => {
    if (!title || !body) return;
    await addPosts(title, body).then((res) => {
      setBody("");
      setTitle("");
      console.log("投稿成功");
      router.push("/");
    });
  };

  // if (!isAuth) {
  //   router.push("/login");
  // }

  return (
    <Container>
      <FlexBox>
        <h1 className="text-center text-gray-500 font-bold text-xl p-5">
          記事投稿をする
        </h1>
        <div>
          <TextLabel htmlFor={"email"}>タイトル</TextLabel>
          <TextInput
            type={"text"}
            id={"title"}
            name={"title"}
            ariaLabel={"タイトル"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            value={title}
            required
          />
        </div>
        <div>
          <TextLabel htmlFor={"postContent"}>投稿内容</TextLabel>
          <TextArea
            name={"postContent"}
            id={"postContent"}
            ariaLabel={"投稿内容"}
            row={10}
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></TextArea>
        </div>

        <Preview title={title} body={body}></Preview>

        <Button onClick={handlePost} blue>
          投稿する
        </Button>
      </FlexBox>
    </Container>
  );
};

export default page;
