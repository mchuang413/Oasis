import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-200 fixed w-full z-10 top-0">
        <div className="flex-1">
        
          <Link href="/" className="btn btn-ghost text-xl">
            <img src="/assets/logo.png" className="h-8  mb-2 mr-1" />
              Oasis
            </Link>
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
              <Link href="\calendar">Calendar</Link>
            </li>
            <li>
              <Link href="\connect">Connect</Link>
            </li>
            <li>
              <Link href="\courses">Courses</Link>
            </li>
            <li>
              <Link href="\breath">Breath</Link>
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
