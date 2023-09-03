import Link from "next/link";
import React, { useEffect } from "react";
import { useAuthContext } from "../context/auth";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <nav className="bg-teal-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold text-lg">
          <Link href={"/"}> Blog</Link>
        </div>
        <Nav />
      </div>
    </nav>
  );
};

export default Navbar;
