import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="container  p-4 m-auto">{children}</div>;
};

export default Container;
