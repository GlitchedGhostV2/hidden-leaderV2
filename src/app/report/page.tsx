"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import {
  Award,
  Download,
  RotateCcw,
  TrendingUp,
} from "lucide-react";

import {
  getStrengths,
  getGrowthAreas,
} from "@/lib/reportHelpers";
import { leaderDescriptions } from "@/data/leaderDescriptions";

interface LeaderResult {
  name: string;
  image: string;
  compatibility: number;
  score: number;
}

interface ReportData {
  traits: Record<string, number>;
  rankings: LeaderResult[];
}

export default function ReportPage() {
  const router = useRouter();
  const reportRef = useRef<HTMLDivElement>(null);

  const [report, setReport] = useState<ReportData | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("leader-results");

    if (!stored) {
      router.replace("/");
      return;
    }

    setReport(JSON.parse(stored));
  }, [router]);

  if (!report) return null;

  const rankings = report.rankings;
  const topLeader = rankings[0];
  const leaderInfo = leaderDescriptions[topLeader.name];

  const strengths = getStrengths(report.traits);
  const growth = getGrowthAreas(report.traits);

  async function downloadPDF() {
  if (!reportRef.current) {
    alert("Report could not be found.");
    return;
  }

  try {
    const element = reportRef.current;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#F8F4EA",
      logging: false,
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.95);

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth;
    const imgHeight =
      (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(
      imgData,
      "JPEG",
      0,
      position,
      imgWidth,
      imgHeight
    );

    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;

      pdf.addPage();

      pdf.addImage(
        imgData,
        "JPEG",
        0,
        position,
        imgWidth,
        imgHeight
      );

      heightLeft -= pageHeight;
    }

        pdf.save("Hidden-Leader-Report.pdf");

  } catch (error) {
    console.error("PDF generation failed:", error);

    alert(
      error instanceof Error
        ? `PDF Error: ${error.message}`
        : "Unknown PDF generation error"
    );
  }
}
  const traitNames: Record<string, string> = {
  vision: "Vision",
  strategy: "Strategic Thinking",
  courage: "Courage",
  innovation: "Innovation",
  justice: "Justice",
  unity: "Teamwork",
  wisdom: "Wisdom",
  service: "Service",
};
  return (
    <main className="min-h-screen bg-[#F8F4EA]">
      <div ref={reportRef}>

        {/* Hero */}

        <section className="bg-[#2E2015] px-6 py-20 text-black">

          <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row">

            <div className="relative h-80 w-64 overflow-hidden rounded-3xl border-4 border-yellow-500">

              <Image
                src={topLeader.image}
                alt={topLeader.name}
                fill
                className="object-cover"
              />

            </div>

            <div className="flex-1">

              <p className="uppercase tracking-[0.4em] text-yellow-300">
                Your Leadership Match
              </p>

              <h1 className="mt-4 text-5xl font-bold">
                {topLeader.name}
              </h1>

              <div className="mt-6 flex items-center gap-3">

                <Award className="text-yellow-400" />

                <span className="text-3xl font-bold text-yellow-300">
                  {topLeader.compatibility}% Compatible
                </span>

              </div>

              <div className="mt-8 rounded-2xl bg-white/10 p-6 backdrop-blur">

  <h3 className="text-xl font-extrabold text-yellow-300">
    {leaderInfo.title}
  </h3>

  <p className="mt-3 leading-8 text-black/95">
    {leaderInfo.description}
  </p>

</div>
            </div>

          </div>

        </section>

        {/* Compatibility */}

        <section className="mx-auto max-w-6xl px-6 py-20">

          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <div className="mb-10 flex items-center gap-3">

              <TrendingUp className="text-[#8A5A00]" />

              <h2 className="text-3xl font-bold text-[#2B2118]">
                Compatibility Rankings
              </h2>

            </div>

            <div className="space-y-8">

              {rankings.map((leader) => (

                <div key={leader.name}>

                  <div className="mb-2 flex justify-between">

                    <span className="font-semibold text-black">
  {leader.name}
</span>

                    <span className="font-bold text-[#8A5A00]">
                      {leader.compatibility}%
                    </span>

                  </div>

                  <div className="h-3 rounded-full bg-gray-200">

                    <div
                      className="h-full rounded-full bg-yellow-600 transition-all duration-700"
                      style={{
                        width: `${leader.compatibility}%`,
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>
              {/* Leadership Trait Profile */}

<section className="mx-auto max-w-6xl px-6 pb-20">

  <div className="rounded-3xl bg-white p-10 shadow-xl">

    <h2 className="mb-8 text-3xl font-bold text-black">
  Leadership Trait Profile
</h2>

    <p className="mb-10 text-[#4B3A2A]">
      These scores represent the leadership qualities reflected in your responses.
    </p>

    {Object.entries(report.traits).map(([trait, value]) => {

      const percentage = Math.min((value as number) * 20, 100);

      return (

        <div key={trait} className="mb-6">

          <div className="mb-2 flex justify-between">

            <span className="font-semibold capitalize text-black">
  {traitNames[trait] || trait}
</span>

            <span className="font-bold text-[#8A5A00]">
              {percentage}%
            </span>

          </div>

         <div className="h-4 overflow-hidden rounded-full bg-yellow-100">

  <div
    className="h-full rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 transition-all duration-700"
    style={{
      width: `${percentage}%`,
    }}
  />

</div>

        </div>

      );

    })}

  </div>

</section>
{/* Top Leadership Traits */}

<section className="mx-auto max-w-6xl px-6 pb-20">

  <div className="rounded-3xl bg-[#2E2015] p-10 text-black shadow-xl">

    <h2 className="mb-8 text-3xl font-bold">
      Your Top Leadership Traits
    </h2>

    <div className="grid gap-6 md:grid-cols-3">

      {Object.entries(report.traits)
        .sort((a, b) => Number(b[1]) - Number(a[1]))
        .slice(0, 3)
        .map(([trait], index) => (

          <div
            key={trait}
            className="rounded-2xl bg-white/10 p-6 backdrop-blur"
          >

            <p className="text-4xl">
              {["🥇", "🥈", "🥉"][index]}
            </p>

            <h3 className="mt-4 text-2xl font-bold">
              {traitNames[trait] || trait}
            </h3>

          </div>

        ))}

    </div>

  </div>

</section>
                {/* Leadership Summary */}

        <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 md:grid-cols-2">

          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h2 className="text-2xl font-bold text-[#2B2118]">
              Leadership Strengths
            </h2>

            <ul className="mt-6 space-y-4 text-[#4B3A2A]">
              {strengths.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>

          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h2 className="text-2xl font-bold text-[#2B2118]">
              Areas for Growth
            </h2>

            <ul className="mt-6 space-y-4 text-[#4B3A2A]">
              {growth.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

          </div>

        </section>

      </div>

      {/* Buttons */}

      <section className="pb-24">

        <div className="flex flex-wrap justify-center gap-5">

          <button
            onClick={downloadPDF}
            className="flex items-center gap-2 rounded-xl bg-yellow-600 px-8 py-4 text-black transition hover:bg-yellow-700"
          >
            <Download size={20} />
            Download PDF
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 transition hover:bg-gray-100 text-black"
          >
            <RotateCcw size={20} />
            Take Again
          </Link>

        </div>

      </section>

    </main>
  );
}
