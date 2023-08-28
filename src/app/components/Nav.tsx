import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/nav.module.css";

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
        <Link
          href={"/posts"}
          className="text-white hover:text-white hover:bg-teal-400 duration-200 scale-95  rounded-full px-3 py-2"
          onClick={() => setNavIsOpen(false)}
        >
          Post
        </Link>
        <Link
          href={"/contact"}
          className="text-white hover:text-white hover:bg-teal-400 duration-200 scale-95  rounded-full px-3 py-2"
          onClick={() => setNavIsOpen(false)}
        >
          Contact
        </Link>
        {isAuth ? (
          <Link
            href={"/logout"}
            className="text-white hover:text-white hover:bg-teal-400 duration-200 scale-95 border rounded-full px-4 py-2"
            onClick={() => setNavIsOpen(false)}
          >
            logout
          </Link>
        ) : (
          <Link
            href={"/login"}
            className="text-white hover:text-white hover:bg-teal-400 duration-200 scale-95 border rounded-full px-4 py-2"
            onClick={() => setNavIsOpen(false)}
          >
            login
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Nav;
