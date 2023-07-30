"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
} from "react";

type Auth = {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
};

const initialState: Auth = {
  isAuth: false,
  setIsAuth: () => {},
};

// contextの初期化
const authInfoContext = createContext<Auth>(initialState);

// AuthProviderで囲んだコンポーネント間でauthInfoが共有可能になる
export const AuthProvider = ({
  children,
  authInfo,
}: {
  children: ReactNode;
  authInfo: Auth;
}) => {
  return (
    <authInfoContext.Provider value={authInfo}>
      {children}
    </authInfoContext.Provider>
  );
};

// 共有された情報にアクセスするためのカスタムフック
export const useAuthContext = () => {
  return useContext(authInfoContext);
};
