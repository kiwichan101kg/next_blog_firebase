import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/nav.module.css";
import NavLink from "./atoms/NavLink";
import { useAuthContext } from "../context/auth";

const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const { isAuth, setIsAuth } = useAuthContext();

  useEffect(() => {
    const isAuthStrage = localStorage.getItem("isAuth");
    if (isAuthStrage === "true") {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [isAuth]);

  return (
    <div className={navIsOpen ? styles.open : styles.close}>
      <button
        className={styles.btn}
        onClick={() => setNavIsOpen((prev) => !prev)}
      >
        <span className={styles.bar}></span>
      </button>
      <ul className={styles.list}>
        <NavLink href={"/contact"} onClick={() => setNavIsOpen(false)}>
          Contact
        </NavLink>

        <NavLink href={"/setting"} onClick={() => setNavIsOpen(false)}>
          Setting
        </NavLink>
        {isAuth ? (
          <>
            <NavLink href={"/posts"} onClick={() => setNavIsOpen(false)}>
              Post
            </NavLink>

            <NavLink
              border
              href={"/logout"}
              onClick={() => setNavIsOpen(false)}
            >
              Logout
            </NavLink>
          </>
        ) : (
          <NavLink border href={"/login"} onClick={() => setNavIsOpen(false)}>
            Login
          </NavLink>
        )}
      </ul>
    </div>
  );
};

export default Nav;
