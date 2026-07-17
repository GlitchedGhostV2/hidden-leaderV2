"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-36">

      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center text-black">

        <p className="uppercase tracking-[0.45em] text-yellow-300">
          Your Journey Begins Here
        </p>

        <h2 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
          Ready to Discover
          <br />
          The Hidden Leader
          <br />
          Inside You?
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-9 text-black/95">
          Complete five leadership scenarios and receive your personalized
          compatibility report inspired by India's greatest leaders.
        </p>

        <Link
          href="/instructions"
          className="mt-12 inline-flex items-center gap-3 rounded-full bg-yellow-600 px-10 py-4 text-lg font-semibold text-black transition duration-300 hover:scale-105 hover:bg-yellow-500"
        >
          Start Assessment

          <ArrowRight size={22} />
        </Link>

      </div>

    </section>
  );
}