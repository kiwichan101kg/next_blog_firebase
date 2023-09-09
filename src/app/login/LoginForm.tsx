import React from "react";
import { auth, provider } from "../lib/firebaseConfig";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../context/auth";
import Button from "../components/atoms/Button";
import TextLabel from "../components/atoms/TextLabel";
import TextInput from "../components/atoms/TextInput";
import FlexBox from "../components/FlexBox";
import { signInWithPopup } from "firebase/auth";

const LoginForm = () => {
  const router = useRouter();
  const { isAuth, setIsAuth } = useAuthContext();
  console.log("isAuth", isAuth);

  // Googleでログイン
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", "true");
      setIsAuth(true);
      router.push("/");
      console.log(result);
    });
  };
  return (
    <>
      <form action="">
        <FlexBox>
          <h1 className="text-center  text-gray-500 font-bold text-xl p-5">
            ログインで始める
          </h1>
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

          <Button blue>ログイン</Button>
        </FlexBox>
      </form>
    </>
  );
};

export default LoginForm;
