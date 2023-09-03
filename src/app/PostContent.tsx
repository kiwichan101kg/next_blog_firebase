import React from "react";
import DateAndTime from "./components/DateAndTime";

type PostContent = {
  title: string;
  text: string;
  date: { seconds: number; nanoseconds: number };
};

const PostContent = ({ title, text, date }: PostContent) => {
  return (
    <div className=" flex flex-col bg-white p-4 rounded-sm">
      <div className="flex justify-between">
        <h2>{title}</h2>
        <DateAndTime date={date}></DateAndTime>
      </div>

      <hr />

      <p>{text}</p>
    </div>
  );
};

export default PostContent;
