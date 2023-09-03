import React from "react";
import DateAndTime from "./components/DateAndTime";
import Image from "next/image";

type PostContent = {
  title: string;
  text: string;
  createAt: { seconds: number; nanoseconds: number };
};

const PostContent = ({ title, text, createAt }: PostContent) => {
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
          <h2>{title}</h2>
        </div>

        <DateAndTime createAt={createAt}></DateAndTime>
      </div>

      <hr />

      <p className="p-2">{trunscateString(text, 40)}</p>
    </div>
  );
};

const trunscateString = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return `${text.substring(0, maxLength)}...`;
  }
};

export default PostContent;
