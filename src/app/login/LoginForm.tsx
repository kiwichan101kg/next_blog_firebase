import React from "react";
import Button from "../components/atoms/Button";
import TextLabel from "../components/atoms/TextLabel";
import TextInput from "../components/atoms/TextInput";

const LoginForm = () => {
  return (
    <>
      <form action="" className="flex flex-col gap-6 ">
        <div className="flex flex-col ">
          <TextLabel htmlFor={"email"}>メールアドレス</TextLabel>
          <TextInput
            type={"text"}
            id={"email"}
            name={"email"}
            ariaLabel={"メールアドレス"}
          />
        </div>

        <div className="flex flex-col ">
          <TextLabel htmlFor={"password"}>パスワード</TextLabel>
          <TextInput
            type={"text"}
            id={"password"}
            name={"password"}
            ariaLabel={"パスワード"}
          />
        </div>
        <div className="flex justify-center">
          <Button blue>ログイン</Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
