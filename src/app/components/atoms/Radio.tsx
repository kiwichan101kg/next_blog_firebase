import React from "react";

type RadioProps = {
  children: React.ReactNode;
  id: string;
  name: string;
  ariaLabel: string;
  htmlFor: string;
};

const Radio = ({ children, id, name, ariaLabel, htmlFor }: RadioProps) => {
  return (
    <label htmlFor={htmlFor} className="mr-2">
      <input
        type="radio"
        id={id}
        name={name}
        aria-label={ariaLabel}
        className="mr-1"
      />
      {children}
    </label>
  );
};

export default Radio;
