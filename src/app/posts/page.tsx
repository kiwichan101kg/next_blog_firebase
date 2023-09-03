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

// inputの中身を取得する⇨DBに保存する

const page = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const handlePost = async () => {
    await addPosts(title, text).then((res) => {
      setText("");
      setTitle("");
      console.log("投稿成功");
      router.push("/");
    });
  };

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
          />
        </div>
        <div>
          <TextLabel htmlFor={"postContent"}>投稿内容</TextLabel>
          <TextArea
            name={"postContent"}
            id={"postContent"}
            ariaLabel={"投稿内容"}
            row={10}
            onChange={(e) => setText(e.target.value)}
            value={text}
          ></TextArea>
        </div>
        <Button onClick={handlePost} blue>
          投稿する
        </Button>
      </FlexBox>
    </Container>
  );
};

export default page;
