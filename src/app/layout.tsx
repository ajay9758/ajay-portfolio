import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ajay | Portfolio",
  description: "Ajay Negi's portfolio",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-gray-100 text-gray-950 h-[5555]">
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="absolute left-[35rem] top-[-1rem] -z-10 h-[31.25rem] sm:w-screen bg-[#dbd7fb] blur-[10rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        {children}
      </body>
    </html>
  );
}
