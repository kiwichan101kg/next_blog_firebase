import React from "react";
import DateAndTime from "./components/DateAndTime";
import Image from "next/image";
import Link from "next/link";

export type PostContent = {
  post_id: string;
  title: string;
  body: string;
  createdAt: { seconds: number; nanoseconds: number };
};

const PostContent = ({ post_id, title, body, createdAt }: PostContent) => {
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

      <p className="p-2">{trunscateString(body, 40)}</p>
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
