import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <Link href={"/"}>ホーム</Link>
      <Link href={"/posts"}>記事投稿</Link>
      <Link href={"/login"}>ログイン</Link>
    </nav>
  );
};

export default Navbar;
