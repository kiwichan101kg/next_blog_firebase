"use client";
import React from "react";
import { useForm } from "react-hook-form";

const UserInfoForm = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form action="" className="flex flex-col gap-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-600 mb-1">
            名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            aria-label="名前"
            className="border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-600 mb-1">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            aria-label="メールアドレス"
            className="border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="birthday" className="text-gray-600 mb-1">
            生年月日
          </label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            aria-label="生年月日"
            className="border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-600 mb-1">性別</label>
          <div className="flex">
            <label htmlFor="male" className="mr-2">
              <input
                type="radio"
                id="male"
                name="gender"
                aria-label="男性"
                className="mr-1"
              />
              男性
            </label>
            <label htmlFor="female">
              <input
                type="radio"
                id="female"
                name="gender"
                aria-label="女性"
                className="mr-1"
              />
              女性
            </label>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="zipcode" className="text-gray-600 mb-1">
            郵便番号
          </label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            required
            pattern="[0-9]{7}"
            aria-label="郵便番号"
            className="border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="address" className="text-gray-600 mb-1">
            住所
          </label>
          <textarea
            name="address"
            id="address"
            aria-label="住所"
            className="border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            rows={4}
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button className="w-full rounded-md px-3 py-2 my-4 text-white bg-sky-500  hover:bg-sky-700 hover:scale-95 duration-200  ">
            登録
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInfoForm;
