import React from "react";

const Button = ({
  blue,
  onClick,
  children,
}: {
  blue?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={
        blue
          ? "w-full text-center rounded-md px-3 py-2  text-white bg-sky-500  hover:bg-sky-700 font-semibold hover:scale-95 duration-200 cursor-pointer"
          : "w-full text-center rounded-md px-2 py-1 my-6 bg-white text-blue-500 border border-blue-500 font-semibold hover:bg-blue-100 duration-200 hover:scale-95 cursor-pointer"
      }
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
