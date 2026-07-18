"use client";

import { Question } from "@/data/questions";

interface Props {
  question: Question;
  selected?: string;
  onSelect: (value: string) => void;
}

export default function QuestionCard({
  question,
  selected,
  onSelect,
}: Props) {
  return (
    <>
      <h2 className="text-3xl font-bold text-[#2B2118]">
        {question.title}
      </h2>

      <p className="mt-8 text-lg leading-9 text-[#4B3A2A]">
        {question.scenario}
      </p>

      <div className="mt-12 space-y-5">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`w-full rounded-2xl border p-6 text-left text-black transition ${
              selected === option.id
                ? "border-yellow-600 bg-yellow-100"
                : "border-gray-200 bg-white hover:border-yellow-500"
            }`}
          >
            <span className="font-semibold">{option.id}.</span>{" "}
            {option.text}
          </button>
        ))}
      </div>
    </>
  );
}