import Link from "next/link";
import React from "react";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-3 p-5 text-[#ADB7BE] font-semibold rounded sm:text-xl md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
