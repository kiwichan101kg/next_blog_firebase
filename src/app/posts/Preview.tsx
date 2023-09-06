import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";

const Preview = ({
  title,
  body,
  full,
}: {
  title: string;
  body: string;
  full?: boolean;
}) => {
  return (
    <div className={`flex flex-col gap-10 my-8 ${full ? "min-h-screen" : ""}`}>
      <h1 className="font-bold text-4xl">{title}</h1>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        className="text-xl"
      >
        {body}
      </ReactMarkdown>
    </div>
  );
};

export default Preview;
