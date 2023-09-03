import Link from "next/link";
import React from "react";

type NavLinkProps = {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children: React.ReactNode;
  border?: boolean;
};

const NavLink = ({ href, onClick, children, border }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={
        border
          ? "text-white hover:text-white hover:bg-teal-400 duration-200 scale-95 border rounded-full mx-2 px-4 py-2"
          : "text-white hover:text-white hover:bg-teal-400 duration-200 scale-95  rounded-full mx-2 px-3 py-2"
      }
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
