import React, { ReactNode } from "react";

const SetGap = ({
  children,
  gapValue,
}: {
  children: ReactNode;
  gapValue: string;
}) => {
  return <div className={`flex flex-col gap-${gapValue}`}>{children}</div>;
};

export default SetGap;
