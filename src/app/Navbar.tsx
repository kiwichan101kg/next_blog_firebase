import Link from "next/link";
import React, { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuthContext } from "./context/auth";

const Navbar = () => {
  const { isAuth, setIsAuth } = useAuthContext();

  useEffect(() => {
    const isAuthStrage = localStorage.getItem("isAuth");
    if (isAuthStrage === "true") {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
    console.log(isAuthStrage);
  }, [isAuth]);

  return (
    <nav className="bg-teal-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold text-lg">
          <Link href={"/"}>
            {" "}
            <MenuIcon className="mx-4 " />
            Blog
          </Link>
        </div>
        <div className="space-x-2">
          <Link
            href={"/posts"}
            className="text-white hover:text-white hover:bg-teal-400 duration-200 scale-95  rounded-full px-3 py-2"
          >
            Post
          </Link>
          <Link
            href={"/contact"}
            className="text-white hover:text-white hover:bg-teal-400 duration-200 scale-95  rounded-full px-3 py-2"
          >
            Contact
          </Link>
          {isAuth ? (
            <Link
              href={"/logout"}
              className="text-white hover:text-white hover:bg-teal-400 duration-200 scale-95 border rounded-full px-4 py-2"
            >
              logout
            </Link>
          ) : (
            <Link
              href={"/login"}
              className="text-white hover:text-white hover:bg-teal-400 duration-200 scale-95 border rounded-full px-4 py-2"
            >
              login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
