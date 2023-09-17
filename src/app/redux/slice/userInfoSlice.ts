import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export type UserInfo = {
  user_id: string;
  user_name: string;
  profile_image_url?: string;
  profile_background_image_url?: string;
  profile_text?: string;
  followers: string[];
  followings: string[];
};

const initialState: UserInfo = {
  user_id: "",
  user_name: "",
  followers: [],
  followings: [],
};

const reducers = {
  setUserInfoStore: (
    _state: UserInfo,
    action: PayloadAction<UserInfo>
  ): UserInfo => ({
    ...action.payload,
  }),
  updateUserInfo: (state: UserInfo, action: PayloadAction<UserInfo>) => ({
    ...state,
    ...action.payload,
  }),
  clear: () => initialState,
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers,
});

// Selectorの設定
export const userInfoSelector = createSelector(
  (state: RootState) => state["userInfo"],
  (state: UserInfo) => state
);

export const { setUserInfoStore, clear } = userInfoSlice.actions; //actionCreatorのこと

export const useAppDispatch = () => useDispatch<AppDispatch>();
