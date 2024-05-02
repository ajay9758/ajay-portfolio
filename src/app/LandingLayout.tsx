import React from "react";
import ActiveSectionContextProvider from "@/context/active-section-context";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div >
      <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
      <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
      <div className="flex flex-col items-center justify-center pt-20 sm:pt-36">
        <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
      </div>
    </div>
  );
}
