"use client";
import React, { useCallback, useState } from "react";

const page = () => {
  console.log("pageレンダリング");

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCountUp = useCallback(() => {
    setCount1((prev) => prev + 1);
  }, [count1]);

  const handleCountDown = useCallback(() => {
    setCount2((prev) => prev - 1);
  }, [count2]);

  return (
    <div>
      <div>
        <Child1 handleCountUp={handleCountUp} />
        <ChildCount1 count1={count1} />
      </div>
      <div>
        <Child2 handleCountDown={handleCountDown} />
        <ChildCount2 count2={count2} />
      </div>
    </div>
  );
};

export default page;

const Child1 = React.memo(
  ({ handleCountUp }: { handleCountUp: () => void }) => {
    console.log("ボタン1レンダリング");

    return (
      <div>
        <button onClick={handleCountUp}>CountUp1</button>
      </div>
    );
  }
);

const Child2 = React.memo(
  ({ handleCountDown }: { handleCountDown: () => void }) => {
    console.log("ボタン2レンダリング");

    return (
      <div>
        <button onClick={handleCountDown}>CountDown2</button>
      </div>
    );
  }
);

const ChildCount1 = React.memo(({ count1 }: { count1: number }) => {
  console.log("Count1レンダリング");

  return <>Count1：{count1}</>;
});

const ChildCount2 = React.memo(({ count2 }: { count2: number }) => {
  console.log("Count2レンダリング");

  return <>Count2：{count2}</>;
});
