"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoadingReport() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/report");
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8F4EA]">

      <div className="text-center">

        <div className="mx-auto mb-10 h-24 w-24 animate-spin rounded-full border-8 border-yellow-200 border-t-yellow-700" />

        <h1 className="text-4xl font-bold text-[#2B2118]">
          Analyzing Your Leadership...
        </h1>

        <p className="mt-5 text-lg text-[#4B3A2A]">
          Comparing your responses with renowned Indian leaders.
        </p>

      </div>

    </main>
  );
}