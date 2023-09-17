"use client";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import Container from "./components/Container";
import FlexBox from "./components/FlexBox";
import PostList from "./components/PostList";
import { useEffect, useState } from "react";
import { fetchUserInfo } from "./api";
import { SessionType, UserInfo } from "./types";
import {
  setUserInfoStore,
  useAppDispatch,
  userInfoSelector,
} from "./redux/slice/userInfoSlice";

export default function Home() {
  const { data: session } = useSession();
  const [userInfo, setUserInfo] = useState<UserInfo | Object>({});
  const dispatch = useAppDispatch();

  const user = useSelector(userInfoSelector);
  console.log(user);

  useEffect(() => {
    const sessionInfo: SessionType = session as SessionType;

    const getUserInfo = async () => {
      const data = await fetchUserInfo(sessionInfo?.user?.id);
      setUserInfo(data);
      dispatch(setUserInfoStore(data as UserInfo));
    };
    getUserInfo();
    console.log("ユーザー情報", userInfo);
  }, [session]);
  return (
    <div>
      <Container>
        <FlexBox>
          <PostList />
        </FlexBox>
      </Container>
    </div>
  );
}
