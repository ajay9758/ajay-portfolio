import React from "react";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center pt-28 sm:pt-36 px-4">
      {children}
    </div>
  );
}
