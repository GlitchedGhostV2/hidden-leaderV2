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

        <div className="hidden gap-10 text-white md:flex">

          <a href="#about" className="transition hover:text-yellow-300">
            About
          </a>

          <a href="#leaders" className="transition hover:text-yellow-300">
            Leaders
          </a>

          <a href="#journey" className="transition hover:text-yellow-300">
            Journey
          </a>

        </div>

        <Link
          href="/instructions"
          className="rounded-full bg-yellow-600 px-6 py-3 font-semibold text-white transition hover:bg-yellow-500"
        >
          Start
        </Link>

      </div>

    </nav>
  );
}