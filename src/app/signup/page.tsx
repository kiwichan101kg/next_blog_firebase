import React from "react";
import TextLabel from "../components/atoms/TextLabel";
import TextInput from "../components/atoms/TextInput";
import FlexBox from "../components/FlexBox";
import Button from "../components/atoms/Button";
import Container from "../components/Container";

const page = () => {
  return (
    <>
      <Container half>
        <h1 className="text-center  text-gray-500 font-bold text-xl p-5">
          新規登録
        </h1>
        <form action="">
          <FlexBox>
            <div>
              <TextLabel htmlFor={"email"}>メールアドレス</TextLabel>
              <TextInput
                type={"text"}
                id={"email"}
                name={"email"}
                ariaLabel={"メールアドレス"}
              />
            </div>

            <div>
              <TextLabel htmlFor={"password"}>パスワード</TextLabel>
              <TextInput
                type={"text"}
                id={"password"}
                name={"password"}
                ariaLabel={"パスワード"}
              />
            </div>

            <Button blue>登録</Button>

            <Button>Googleでログインして始める</Button>
          </FlexBox>
        </form>
      </Container>
    </>
  );
};

export default page;
