import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const PrevNextPagination = ({
  prevPost,
  nextPost,
}: {
  prevPost: any;
  nextPost: any;
}) => {
  return (
    // <div className=" fixed bottom-8 w-1/2">
    <div className=" ">
      <div className="flex justify-between">
        {prevPost && (
          <Link
            href={`/blog/${prevPost?.post_id}`}
            className="flex items-center gap-3 text-gray-500 text-xl mt-4"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            <p>{prevPost?.title}</p>
          </Link>
        )}

        {nextPost && (
          <Link
            href={`/blog/${nextPost?.post_id}`}
            className={`flex items-center gap-3 text-gray-500 text-xl mt-4 ${
              !prevPost ? "ml-auto" : "" // prevPostが存在しない場合、ml-autoを追加
            }`}
          >
            <p>{nextPost?.title}</p>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default PrevNextPagination;
