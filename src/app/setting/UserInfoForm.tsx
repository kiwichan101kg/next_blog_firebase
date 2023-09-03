"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "../components/atoms/Button";
import TextInput from "../components/atoms/TextInput";
import TextLabel from "../components/atoms/TextLabel";
import Radio from "../components/atoms/Radio";
import TextArea from "../components/atoms/TextArea";
import FlexBox from "../components/FlexBox";

const UserInfoForm = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form action="">
        <FlexBox>
          <div>
            <TextLabel htmlFor={"name"}>名前</TextLabel>
            <TextInput
              type={"text"}
              id={"name"}
              name={"name"}
              ariaLabel={"名前"}
            />
          </div>

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
            <TextLabel htmlFor={"birthday"}>生年月日</TextLabel>
            <TextInput
              type={"date"}
              id={"birthday"}
              name={"birthday"}
              ariaLabel={"生年月日"}
            />
          </div>

          <div>
            <TextLabel>性別</TextLabel>
            <div className="flex">
              <Radio
                id={"male"}
                name={"gender"}
                ariaLabel={"男性"}
                htmlFor={"male"}
              >
                男性
              </Radio>

              <Radio
                id={"female"}
                name={"gender"}
                ariaLabel={"女性"}
                htmlFor={"female"}
              >
                女性
              </Radio>
            </div>
          </div>

          <div>
            <TextLabel htmlFor={"zipcode"}>郵便番号</TextLabel>
            <TextInput
              type={"text"}
              id={"zipcode"}
              name={"zipcode"}
              ariaLabel={"郵便番号"}
            />
          </div>

          <div>
            <TextLabel htmlFor={"address"}>住所</TextLabel>
            <TextArea
              name={"address"}
              id={"address"}
              ariaLabel={"住所"}
              row={4}
            ></TextArea>
          </div>

          <div className="flex justify-center">
            <Button blue>登録</Button>
          </div>
        </FlexBox>
      </form>
    </div>
  );
};

export default UserInfoForm;
