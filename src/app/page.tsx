"use client";

import {
  ArrowRight,
  ChevronDown,
  ScrollText,
  Landmark,
  FileText,
} from "lucide-react";

import Link from "next/link";
import Leaders from "@/components/Leaders";
import Navbar from "@/components/Navbar";
import ReportPreview from "@/components/ReportPreview";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const timeline = [
  "Chanakya",
  "Ashoka Maurya",
  "Chhatrapati Shivaji Maharaj",
  "Rani Lakshmibai",
  "Mahatma Gandhi",
  "Sardar Vallabhbhai Patel",
  "Dr. B.R. Ambedkar",
  "Swami Vivekananda",
  "Vikram Sarabhai",
  "Dr. A.P.J. Abdul Kalam",
];

export default function Home() {
  return (
    <main className="bg-[#F8F4EA] overflow-x-hidden">

      <Navbar />

      {/* ================= HERO ================= */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-5xl px-6 text-center text-white">

          <p className="mb-5 uppercase tracking-[0.45em] text-yellow-300">
            Inspired by the Greatest Leaders of India
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            The Hidden
            <br />
            Leader Inside You
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/90">
            Discover the leadership qualities that lie within you through five
            immersive scenarios inspired by India's greatest leaders.
          </p>

          <Link
            href="/instructions"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-yellow-600 px-8 py-4 text-lg font-semibold text-black transition hover:scale-105 hover:bg-yellow-500"
          >
            Start the Assessment
            <ArrowRight />
          </Link>

          <div className="mt-16 grid grid-cols-3 gap-6">

            <div>
              <h2 className="text-5xl font-bold text-yellow-300">10</h2>
              <p className="mt-2 uppercase tracking-widest">
                Leaders
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-yellow-300">5</h2>
              <p className="mt-2 uppercase tracking-widest">
                Scenarios
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-yellow-300">1</h2>
              <p className="mt-2 uppercase tracking-widest">
                PDF Report
              </p>
            </div>

          </div>

        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-black">
          <ChevronDown size={40} />
        </div>

      </section>

      {/* Divider */}

      <div className="py-10 text-center text-4xl text-[#8A5A00]">
        ❖
      </div>

      {/* ================= ABOUT ================= */}

      <section className="px-6 pb-32">

        <div className="mx-auto max-w-6xl">

          <p className="text-center uppercase tracking-[0.35em] text-[#8A5A00]">
            About the Assessment
          </p>

          <h2 className="mt-4 text-center text-5xl font-bold text-[#2B2118]">
            Leadership Lives Within Everyone
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-9 text-[#4B3A2A]">
            Every decision reflects a leadership quality.
            Through five carefully designed scenarios,
            this assessment compares your responses with
            leadership qualities inspired by India's most
            influential historical figures.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-10 shadow-xl">

              <ScrollText
                size={50}
                className="text-[#8A5A00]"
              />

              <h3 className="mt-6 text-2xl font-bold text-black">
                Five Scenarios
              </h3>

              <p className="mt-4 leading-8 text-[#4B3A2A]">
                Respond to carefully designed situations
                that reflect real leadership decisions.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-10 shadow-xl">

              <Landmark
                size={50}
                className="text-[#8A5A00]"
              />

              <h3 className="mt-6 text-2xl font-bold text-black">
                Historic Comparison
              </h3>

              <p className="mt-4 leading-8 text-[#4B3A2A]">
                Discover which Indian leader's qualities
                most closely align with yours.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-10 shadow-xl">

              <FileText
                size={50}
                className="text-[#8A5A00]"
              />

              <h3 className="mt-6 text-2xl font-bold text-black">
                Personalized Report
              </h3>

              <p className="mt-4 leading-8 text-[#4B3A2A]">
                Instantly receive a beautifully designed
                compatibility report with downloadable PDF.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= TIMELINE ================= */}

      <section className="bg-[#EFE3C7] px-6 py-28">

        <div className="mx-auto max-w-5xl">

          <p className="text-center uppercase tracking-[0.4em] text-[#8A5A00]">
            Journey Through Time
          </p>

          <h2 className="mt-4 text-center text-5xl font-bold text-[#2B2118]">
            Inspired Across Centuries
          </h2>

          <div className="relative mt-20">

            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-yellow-700" />

            <div className="space-y-14">

              {timeline.map((leader, index) => (

                <div
                  key={leader}
                  className={`relative flex items-center ${
                    index % 2 === 0
                      ? "justify-start"
                      : "justify-end"
                  }`}
                >

                  <div className="w-[45%] rounded-2xl bg-white p-6 shadow-xl">

                    <h3 className="text-xl font-extrabold">
                      {leader}
                    </h3>

                  </div>

                  <div className="absolute left-1/2 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-white bg-yellow-700" />

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      <Leaders />

<ReportPreview />

<FinalCTA />

<Footer />

    </main>
  );
}