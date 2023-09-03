import React from "react";
import { format } from "date-fns";
import ja from "date-fns/locale/ja";
import { Timestamp } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faClockFour } from "@fortawesome/free-solid-svg-icons";

type DateProps = {
  createdAt: { seconds: number; nanoseconds: number };
};

const DateAndTime = ({ createdAt }: DateProps) => {
  const timestamp = new Timestamp(createdAt.seconds, createdAt.nanoseconds);
  const convertDate = format(timestamp.toDate(), "yyyy年MM月dd日", {
    locale: ja,
  });

  return (
    <div className="flex gap-1 items-center">
      <FontAwesomeIcon icon={faClock} color="gray" size="xs" />
      <p className="text-xs text-gray-500">
        {getDiff(timestamp) || convertDate}
      </p>
    </div>
  );
};

export default DateAndTime;

const getDiff = (timestamp: Timestamp): string | undefined => {
  const posted = timestamp.toDate();
  const now = new Date();

  // 現在の日時と投稿日時の差分をミリ秒で計算
  const diff = now.getTime() - posted.getTime();
  // ミリ秒単位の差分を秒に変換
  const seconds = Math.floor(diff / 1000);

  // １ヶ月以上前の投稿はreturn
  if (seconds > 2592000) return;

  if (seconds < 60) {
    return `たった今`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes}分前`;
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return `${hours}時間前`;
  } else {
    const days = Math.floor(seconds / 86400);
    return `${days}日前`;
  }
};
