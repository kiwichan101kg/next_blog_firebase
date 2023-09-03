import React from "react";

type TextLabelProps = {
  children: React.ReactNode;
  htmlFor?: string;
};

const TextLabel = ({ children, htmlFor }: TextLabelProps) => {
  return (
    <label htmlFor={htmlFor} className="text-gray-600 mb-1">
      {children}
    </label>
  );
};

export default TextLabel;
