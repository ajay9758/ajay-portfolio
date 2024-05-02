import { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import ScrollToTop from "@/components/ScrollToTop";

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
    <html lang="en" className="!scroll-smooth">
      <body
        className="dark:text-gray-90 relative bg-gray-50
        text-gray-950 transition-colors duration-300 ease-linear dark:bg-gray-900
      "
      >
        <ThemeContextProvider>
          {children}
          <Toaster position="top-right" />
          <ThemeSwitch />
          <ScrollToTop />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
