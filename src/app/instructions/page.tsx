"use client";

import Link from "next/link";
import {
  Clock3,
  ScrollText,
  User,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function Instructions() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">

        <div className="w-full max-w-5xl rounded-[40px] border border-yellow-500/20 bg-white/10 p-10 backdrop-blur-xl">

          <p className="text-center uppercase tracking-[0.45em] text-yellow-300">
            Leadership Assessment
          </p>

          <h1 className="mt-4 text-center text-5xl font-bold text-white">
            Welcome
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-9 text-black/95">
            Before beginning your journey, please read the following
            instructions carefully.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            {/* Card */}

            <div className="rounded-3xl bg-white/10 p-8 text-black">

              <Clock3
                size={42}
                className="text-yellow-300"
              />

              <h3 className="mt-5 text-2xl font-bold">
                5 Minutes
              </h3>

              <p className="mt-4 leading-8 text-[#2B2118]">
                The assessment contains only five questions and takes
                less than five minutes.
              </p>

            </div>

            {/* Card */}

            <div className="rounded-3xl bg-white/10 p-8 text-black">

              <ScrollText
                size={42}
                className="text-yellow-300"
              />

              <h3 className="mt-5 text-2xl font-bold">
                Answer Honestly
              </h3>

              <p className="mt-4 leading-8 text-[#2B2118]">
                There are no right or wrong answers.
                Choose the option that best represents your decision.
              </p>

            </div>

            {/* Card */}

            <div className="rounded-3xl bg-white/10 p-8 text-white">

              <ShieldCheck
                size={42}
                className="text-yellow-300"
              />

              <h3 className="mt-5 text-2xl font-bold">
                Private
              </h3>

              <p className="mt-4 leading-8 text-[#2B2118]">
                Your responses are not stored.
                They are used only to generate your report.
              </p>

            </div>

          </div>

          {/* Name */}

          <div className="mx-auto mt-20 max-w-xl">

            <label className="mb-3 block text-lg text-white">
              Enter Your Name
            </label>

            <div className="relative">

              <User
                size={22}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#2B2118]500"
              />

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-full border border-yellow-500/30 bg-white px-14 py-5 text-lg outline-none focus:border-yellow-500"
              />

            </div>

          </div>

          {/* Button */}

          <div className="mt-16 text-center">

            <Link
              href="/assessment"
              className="inline-flex items-center gap-3 rounded-full bg-yellow-600 px-10 py-4 text-lg font-semibold text-black transition hover:scale-105 hover:bg-yellow-500"
            >
              Begin Assessment

              <ArrowRight />

            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}