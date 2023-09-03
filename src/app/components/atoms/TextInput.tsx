import React from "react";
import { TextAttribute } from "./Types";

type TextBoxProps = TextAttribute & {
  type: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const TextInput = ({
  type,
  id,
  name,
  ariaLabel,
  value,
  onChange,
  required = false,
}: TextBoxProps) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      aria-label={ariaLabel}
      value={value}
      onChange={onChange}
      required={true}
      className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
    />
  );
};

export default TextInput;
