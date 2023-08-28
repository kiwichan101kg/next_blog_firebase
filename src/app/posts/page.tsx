"use client";
import React, { ChangeEvent, useState } from "react";
import { addPosts, getPosts } from "../api";
import { useRouter } from "next/navigation";
import Container from "../components/Container";

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
      <h1 className="text-center text-gray-500 font-bold text-xl p-5">
        記事投稿をする
      </h1>
      <div>
        <h2 className=" text-gray-500 font-bold text-md ">タイトル</h2>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          value={title}
          type="text"
          className="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-400 block w-full rounded-md sm:text-sm focus:ring-1"
        />
      </div>
      <div>
        <h2 className=" text-gray-500 font-bold text-md mt-3">投稿内容</h2>
        <textarea
          onChange={(e) => setText(e.target.value)}
          value={text}
          rows={10}
          className=" resize-none	 mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-400 block w-full rounded-md sm:text-sm focus:ring-1"
        />
      </div>
      <button
        className="w-full rounded-md px-3 py-2 my-4 text-white bg-sky-500  hover:bg-sky-700 hover:scale-95 duration-200  "
        onClick={handlePost}
      >
        投稿する
      </button>
    </Container>
  );
};

export default page;
