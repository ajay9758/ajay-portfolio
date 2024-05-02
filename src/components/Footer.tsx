"use client";

export default function Footer() {
  return (
    <footer className="min-w-full bg-gray-800 p-4 text-center text-gray-500">
      <small 
        className="block text-gray-400 text-sm mt-1 mb-2"
      >&copy; 2024 Ajay Negi</small>
      <p>
        <span
            className="text-gray-400 font-semibold"
        >About this website :</span> built with Next.js(App Router & Server
        Actions), Tailwind CSS, Typescript , Framer Motion , Vercel hosting.
      </p>
    </footer>
  );
}
