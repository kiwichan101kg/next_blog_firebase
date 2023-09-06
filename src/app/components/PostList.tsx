"use client";
import React, { useEffect, useState } from "react";
import { getPosts } from "../api";
import PostContent from "../PostContent";
import ReactPaginate from "react-paginate";

const PostList = () => {
  const [postContents, setPostContent] = useState<any[]>([]);
  useEffect(() => {
    const setPosts = async () => {
      const data = await getPosts();
      setPostContent(data);
    };
    setPosts();
  }, []);

  // 一つのページに幾つの記事を表示するか(要素数)
  const itemPerPage = 6;
  const { currentPosts, pageCount, handlePageClick } = useGetPagenationInfo(
    postContents,
    itemPerPage
  );

  return (
    <>
      <h1 className="text-gray-500 text-2xl mt-4">最近の投稿</h1>
      {currentPosts?.map((content) => (
        <PostContent
          key={String(content.createdAt.seconds)}
          {...content}
        ></PostContent>
      ))}
      <ReactPaginate
        className="flex gap-4 m-auto p-8 text-4xl"
        pageCount={pageCount}
        onPageChange={handlePageClick}
        nextLabel=" >"
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        previousLabel="< "
        // ページ数字
        pageClassName="relative block rounded bg-transparent px-3 py-1.5 text-lg text-gray-500 transition-all duration-300 hover:bg-gray-100  dark:text-gray dark:hover:bg-neutral-700 dark:hover:text-white"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="relative block rounded bg-transparent px-3 py-1.5 text-lg text-gray-500 transition-all duration-300 hover:bg-gray-100 dark:text-gray dark:hover:bg-neutral-700 dark:hover:text-white"
        nextClassName="page-item"
        nextLinkClassName="relative block rounded bg-transparent px-3 py-1.5 text-lg text-gray-500 transition-all duration-300 hover:bg-gray-100 dark:text-gray dark:hover:bg-neutral-700 dark:hover:text-white"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="relative block rounded bg-transparent px-3 py-1.5 text-lg text-gray-500 transition-all duration-300 hover:bg-gray-100  dark:text-gray dark:hover:bg-neutral-700 dark:hover:text-white"
        containerClassName="pagination"
        activeClassName="active"
      ></ReactPaginate>
    </>
  );
};

/**
 * 現在のページに表示する投稿、セットする関数、ページ数を取得する関数
 * @param allPosts 全部の投稿
 * @param itemPerPage 1ページに表示する投稿数
 * @returns
 */
export const useGetPagenationInfo = (allPosts: any[], itemPerPage: number) => {
  // 現在ページに載せる最初のItemのindex
  const [itemsOffset, setItemsOffset] = useState(0);
  // 次ページの最初のitemのindex(区切るところ)
  const endOffset = itemsOffset + itemPerPage;
  // 現在ページに表示されているItems
  const currentPosts = allPosts.slice(itemsOffset, endOffset);
  // ページ数
  const pageCount = Math.ceil(allPosts.length / currentPosts.length);

  const handlePageClick = (e: { selected: number }) => {
    const newOffset = (e.selected * itemPerPage) % allPosts.length;
    setItemsOffset(newOffset);
  };

  return { currentPosts, pageCount, handlePageClick };
};

export default PostList;
