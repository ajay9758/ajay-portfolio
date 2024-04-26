"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section
      className="mb-28 w-full max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0 "
      id="home"
    >
      <div className="left-1/2 flex items-center justify-center">
        <div className="">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              alt="ajay"
              height={100}
              width={100}
              src="/user32.jpeg"
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
              priority={true}
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Ajay.</span> I&apos;m
        <span className="font-bold"> full-stack developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="borderBlack group flex items-center gap-2  rounded-full bg-gray-900 px-7 py-3 
          text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105
          "
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-2" />{" "}
        </Link>
        <a
          className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"
          href="../../public/AjayResumeUpdated.pdf"
          download
        >
          Download resume{" "}
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />{" "}
        </a>
        <a className="borderBlack flex items-center gap-2 rounded-full  bg-white p-4 text-gray-700 hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10">
          <BsLinkedin />
        </a>
        <a className="borderBlack flex items-center gap-2  rounded-full bg-white p-4 text-gray-700 hover:scale-110 hover:text-gray-950 focus:scale-110 active:scale-[1.15] dark:bg-white/10">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
