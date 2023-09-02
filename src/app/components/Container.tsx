import React, { ReactNode } from "react";

const Container = ({
  half,
  children,
}: {
  half?: boolean;
  children: ReactNode;
}) => {
  return (
    <div
      className={
        half
          ? "container  p-4 m-auto max-w-sm"
          : "container  p-4 m-auto max-w-3xl"
      }
    >
      {children}
    </div>
  );
};

export default Container;
