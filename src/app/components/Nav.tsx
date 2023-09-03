import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/nav.module.css";
import NavLink from "./atoms/NavLink";

const Nav = ({ isAuth }: { isAuth: boolean }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <div className={navIsOpen ? styles.open : styles.close}>
      <button
        className={styles.btn}
        onClick={() => setNavIsOpen((prev) => !prev)}
      >
        <span className={styles.bar}></span>
      </button>
      <ul className={styles.list}>
        <NavLink href={"/posts"} onClick={() => setNavIsOpen(false)}>
          Post
        </NavLink>

        <NavLink href={"/contact"} onClick={() => setNavIsOpen(false)}>
          Contact
        </NavLink>

        <NavLink href={"/setting"} onClick={() => setNavIsOpen(false)}>
          Setting
        </NavLink>

        {isAuth ? (
          <NavLink border href={"/logout"} onClick={() => setNavIsOpen(false)}>
            Logout
          </NavLink>
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
