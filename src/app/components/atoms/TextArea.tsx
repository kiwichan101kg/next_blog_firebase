import React from "react";
import { TextAttribute } from "./Types";

type TextAreaProps = TextAttribute & {
  row: number;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
};

const TextArea = ({
  name,
  id,
  ariaLabel,
  row,
  value,
  onChange,
}: TextAreaProps) => {
  return (
    <textarea
      name={name}
      id={id}
      aria-label={ariaLabel}
      className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 resize-none	"
      rows={row}
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

export default TextArea;
