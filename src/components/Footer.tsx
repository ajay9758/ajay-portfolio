"use client";

export default function Footer() {
  return (
    <footer className="min-w-full bg-gray-800 p-4 text-center text-gray-500">
      <small className="mb-2 mt-1 block text-sm text-gray-400">
        &copy; 2024 Ajay Negi
      </small>
      <p>
        <span className="font-semibold text-gray-400">
          About this website :
        </span>{" "}
        built with Next.js(App Router & Server Actions), Tailwind CSS,
        Typescript , Framer Motion , Vercel hosting.
      </p>
      <p>
        Inspired by{" "}
        <a
          href="https://youtu.be/sUKptmUVIBM?si=xSVwkwagrozBMgyn"
          className="text-blue-400"
          target="_blank"
        >
          ByteGrade
        </a>
      </p>
    </footer>
  );
}
