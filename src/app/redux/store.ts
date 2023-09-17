import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userInfoSlice } from "./slice/userInfoSlice";

// reducerを追加していく
const appReducer = combineReducers({
  /** カウンター */
  [userInfoSlice.name]: userInfoSlice.reducer,
});

export const store = configureStore({
  reducer: appReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
