"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-gradient-to-r from-[#D91656] via-blue-500 to-[#FF4545] rounded-sm ${
            isOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        ></div>
        <div
          className={`w-6 h-1 bg-gradient-to-r from-[#D91656] via-blue-500 to-[#FF4545] rounded-sm ${
            isOpen ? "opacity-0" : ""
          }  ease-in-out duration-500`}
        ></div>
        <div
          className={`w-6 h-1 bg-gradient-to-r from-[#D91656] via-blue-500 to-[#FF4545] rounded-sm ${
            isOpen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        ></div>
      </div>
      {isOpen && (
        <div className="absolute left-0 top-20 w-full h-[calc(100vh-80px)] bg-white flex flex-col items-center justify-center text-xl gap-8 font-FiraCode font-medium capitalize z-10 ">
          <Link href="/">Home</Link>
          <Link href="/">Friends</Link>
          <Link href="/">Groups</Link>
          <Link href="/">Stories</Link>
          <Link href="/">Login</Link>
        </div>
      )}
    </div>
  );
}
