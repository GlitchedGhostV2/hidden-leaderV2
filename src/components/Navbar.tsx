"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-xl bg-black/30 border-b border-yellow-600/20">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-yellow-300"
        >
          Hidden Leader
        </Link>

        <div className="hidden gap-10 text-black md:flex">

          <a href="#about" className="font-bold text-[#F8E7C0] transition-colors duration-300 hover:text-yellow-400">
            About
          </a>

          <a href="#leaders" className="font-bold text-[#F8E7C0] transition-colors duration-300 hover:text-yellow-400">
            Leaders
          </a>

          <a href="#journey" className="font-bold text-[#F8E7C0] transition-colors duration-300 hover:text-yellow-400">
            Journey
          </a>

        </div>

      </div>

    </nav>
  );
}