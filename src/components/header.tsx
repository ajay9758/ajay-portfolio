"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed left-1/2 top-0 h-[4.5rem] w-full -translate-x-1/2  rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 dark:bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-5 sm:h-[3.5rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-opacity-50 dark:shadow-black/[0.1] dark:backdrop-blur-[0.5rem] "
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
      ></motion.div>

      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center  text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={link.name}
              className="relative flex h-3/4 items-center justify-center"
            >
              <Link
                href={link.hash}
                className={clsx(
                  "flex w-full items-center justify-center px-2 py-2 transition hover:text-gray-950 dark:text-gray-50",
                  {
                    "text-gray-950 dark:text-gray-600": activeSection === link.name,
                  },
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-gray-200"
                    layoutId="activeSession"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
