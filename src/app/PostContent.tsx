import React from "react";
import DateAndTime from "./components/DateAndTime";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";

export type PostContentType = {
  post_id: string;
  title: string;
  body: string;
  createdAt: { seconds: number; nanoseconds: number };
};

const PostContent = ({ post_id, title, body, createdAt }: PostContentType) => {
  return (
    <div className=" flex flex-col bg-white p-4 rounded-sm">
      <div className="flex justify-between">
        <div className="flex items-center gap-4 p-2">
          <Image
            src={"/fox.png"}
            alt="きつね"
            width={60}
            height={60}
            className="rounded-full"
          ></Image>
          <Link href={`/blog/${post_id}`}>
            <h2 className="hover:text-gray-500">{title}</h2>
          </Link>
        </div>

        <DateAndTime createdAt={createdAt}></DateAndTime>
      </div>

      <hr />

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        className="text-sm"
      >
        {trunscateString(body, 40)}
      </ReactMarkdown>
    </div>
  );
};

const trunscateString = (body: string, maxLength: number) => {
  if (body.length <= maxLength) {
    return body;
  } else {
    return `${body.substring(0, maxLength)}...`;
  }
};

export default PostContent;
