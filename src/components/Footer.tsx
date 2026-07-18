export default function Footer() {
  return (
    <footer className="bg-[#1A1008] px-6 py-10 text-center">

      {/* Developer Credit */}

      <p className="text-sm uppercase tracking-[0.3em] text-[#E8DCCB]">
        Developed By{" "}
        <span className="font-bold text-yellow-300">
          Sheron Khoya
        </span>
      </p>

      {/* Divider */}

      <div className="mx-auto mt-6 h-px w-40 bg-yellow-500/40" />

      {/* Project Name */}

      <h2 className="mt-6 text-2xl font-bold tracking-wide text-yellow-300">
        The Hidden Leader Inside You
      </h2>

      {/* Subtitle */}

      <p className="mt-3 text-sm tracking-wide text-[#E8DCCB]">
        Leadership Assessment Experience
      </p>

      {/* Description */}

      <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#D8C8B4]">
        Inspired by the leadership qualities and timeless values of
        India&apos;s greatest visionaries, reformers, and leaders.
      </p>

      {/* Copyright */}

      <p className="mt-6 text-xs text-[#A99A87]">
        © 2026 The Hidden Leader Inside You
      </p>

    </footer>
  );
}