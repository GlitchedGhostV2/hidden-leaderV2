"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { questions } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";
import { calculateLeader } from "@/lib/calculateLeader";

export default function AssessmentPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const router = useRouter();

  const question = questions[current];

  function handleSelect(answer: string) {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: answer,
    }));
  }

function next() {
  if (current < questions.length - 1) {
    setCurrent((prev) => prev + 1);
    return;
  }

  // Calculate compatibility
  const results = calculateLeader(answers);

  // Store results temporarily
  sessionStorage.setItem(
    "leader-results",
    JSON.stringify(results)
  );

  // Show analyzing screen first
  router.push("/loading-report");
}

function previous() {
  if (current > 0) {
    setCurrent((prev) => prev - 1);
  }
}
  const progress = ((current + 1) / questions.length) * 100;

  return (
    <main className="min-h-screen bg-[#F8F4EA] px-6 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Progress */}

        <p className="text-lg font-medium text-[#8A5A00]">
          Question {current + 1} of {questions.length}
        </p>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-yellow-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question Card */}

        <div className="mt-12 rounded-3xl bg-white p-10 shadow-xl">
          <QuestionCard
            question={question}
            selected={answers[question.id]}
            onSelect={handleSelect}
          />

          {/* Navigation */}

          <div className="mt-12 flex justify-between">
            <button
              onClick={previous}
              disabled={current === 0}
              className="flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowLeft size={18} />
              Previous
            </button>

            <button
              onClick={next}
              disabled={!answers[question.id]}
              className="flex items-center gap-2 rounded-xl bg-yellow-600 px-6 py-3 font-semibold text-white transition hover:bg-yellow-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {current === questions.length - 1
                ? "Generate Report"
                : "Next"}

              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}