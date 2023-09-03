import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";

const Preview = ({ title, body }: { title: string; body: string }) => {
  return (
    <>
      <h1 className="font-bold text-4xl">{title}</h1>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        className="text-xl"
      >
        {body}
      </ReactMarkdown>
    </>
  );
};

export default Preview;
