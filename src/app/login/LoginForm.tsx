import React from "react";

const LoginForm = () => {
  return (
    <>
      <form action="" className="flex flex-col gap-6 ">
        <div className="flex flex-col ">
          <label htmlFor="email" className="text-gray-600 mb-1">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            aria-label="メールアドレス"
            className=" border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="name" className="text-gray-600 mb-1">
            パスワード
          </label>
          <input
            type="password"
            id="password"
            name="password"
            aria-label="パスワード"
            className="border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex justify-center">
          <button className="w-full rounded-md px-3 py-2  text-white bg-sky-500  hover:bg-sky-700 hover:scale-95 duration-200  ">
            ログイン
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
