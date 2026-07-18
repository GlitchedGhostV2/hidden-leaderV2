"use client";

import Image from "next/image";

const leaders = [
  {
    name: "Dr. A.P.J. Abdul Kalam",
    image: "/images/leaders/apj.jpg",
  },
  {
    name: "Swami Vivekananda",
    image: "/images/leaders/vivekananda.jpg",
  },
  {
    name: "Sardar Vallabhbhai Patel",
    image: "/images/leaders/patel.jpg",
  },
  {
    name: "Dr. B.R. Ambedkar",
    image: "/images/leaders/ambedkar.jpg",
  },
  {
    name: "Vikram Sarabhai",
    image: "/images/leaders/sarabhai.jpg",
  },
  {
    name: "Chhatrapati Shivaji Maharaj",
    image: "/images/leaders/shivaji.jpg",
  },
  {
    name: "Rani Lakshmibai",
    image: "/images/leaders/lakshmibai.jpg",
  },
  {
    name: "Mahatma Gandhi",
    image: "/images/leaders/gandhi.jpg",
  },
  {
    name: "Ashoka Maurya",
    image: "/images/leaders/ashoka.jpg",
  },
  {
    name: "Chanakya",
    image: "/images/leaders/chanakya.jpg",
  },
];

export default function Leaders() {
  return (
    <section id="leaders" className="scroll-mt-20 bg-[#EFE3C7] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <p className="text-center uppercase tracking-[0.35em] text-[#8A5A00]">
          Inspired By
        </p>

        <h2 className="mt-4 text-center text-5xl font-bold text-[#2B2118]">
          Legendary Indian Leaders
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-[#4B3A2A]">
          This assessment compares your leadership qualities with the values
          commonly associated with some of India's greatest visionaries,
          reformers and warriors.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">

          {leaders.map((leader) => (

            <div
              key={leader.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-xl transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="relative h-80 overflow-hidden">

                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-5">

                <h3 className="text-center font-semibold text-[#2B2118]">
                  {leader.name}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}