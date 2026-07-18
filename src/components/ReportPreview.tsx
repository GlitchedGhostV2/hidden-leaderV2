"use client";

import { FileDown, Medal, BarChart3, Sparkles } from "lucide-react";

export default function ReportPreview() {
  return (
    <section className="relative overflow-hidden bg-[#F8F4EA] py-28">

      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <p className="text-center uppercase tracking-[0.4em] text-[#8A5A00]">
          Your Personalized Report
        </p>

        <h2 className="mt-4 text-center text-5xl font-bold text-[#2B2118]">
          Discover Your Leadership Legacy
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-9 text-[#4B3A2A]">
          Once you complete the assessment, you'll receive an instantly
          generated report highlighting your leadership compatibility,
          strengths, and development areas.
        </p>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div className="rounded-3xl bg-white p-10 shadow-2xl">

            <div className="mb-6 flex items-center gap-3">

              <Medal className="text-[#8A5A00]" size={34} />

              <h3 className="text-2xl font-bold text-black">
                Sample Report
              </h3>

            </div>

            <div className="space-y-6">

              <div>

                <div className="flex justify-between">

                  <span className="text-black">Dr. A.P.J. Abdul Kalam</span>

                  <span className="text-black">92%</span>

                </div>

                <div className="mt-2 h-3 rounded-full bg-gray-200">

                  <div className="h-full w-[92%] rounded-full bg-yellow-600" />

                </div>

              </div>

              <div>

                <div className="flex justify-between">

                  <span className="text-black">Swami Vivekananda</span>

                  <span className="text-black">88%</span>

                </div>

                <div className="mt-2 h-3 rounded-full bg-gray-200">

                  <div className="h-full w-[88%] rounded-full bg-yellow-500" />

                </div>

              </div>

              <div>

                <div className="flex justify-between">

                  <span className="text-black">Vikram Sarabhai</span>

                  <span className="text-black">84%</span>

                </div>

                <div className="mt-2 h-3 rounded-full bg-gray-200">

                  <div className="h-full w-[84%] rounded-full bg-yellow-400" />

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="grid gap-6">

            <div className="rounded-3xl bg-white p-8 shadow-xl">

              <BarChart3 className="text-[#8A5A00]" size={36} />

              <h3 className="mt-5 text-2xl font-bold text-black">
                Compatibility Analysis
              </h3>

              <p className="mt-4 leading-8 text-[#4B3A2A]">
                View your compatibility percentage with each legendary leader.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl">

              <Sparkles className="text-[#8A5A00]" size={36} />

              <h3 className="mt-5 text-2xl font-bold text-black">
                Leadership Insights
              </h3>

              <p className="mt-4 leading-8 text-[#4B3A2A]">
                Understand your strongest qualities and areas for future growth.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl">

              <FileDown className="text-[#8A5A00]" size={36} />

              <h3 className="mt-5 text-2xl font-bold text-black">
                Download PDF
              </h3>

              <p className="mt-4 leading-8 text-[#4B3A2A]">
                Save your beautifully designed report instantly as a PDF.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}