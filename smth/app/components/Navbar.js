import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Oasis</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="\">Home</Link>
            </li>
            <li>
              <Link href="\explore">Explore</Link>
            </li>
            <li>
              <Link href="\calendar">Calender</Link>
            </li>
            <li>
              <Link href="\connect">Connect</Link>
            </li>
            <li>
              <Link href="\courses">Courses</Link>
            </li>
            <li>
              <Link href="\blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
