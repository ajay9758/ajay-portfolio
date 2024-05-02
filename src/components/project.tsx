"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const { ref } = useSectionInView("Projects");
  const ref2 = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className="group mb-3 last:mb-0 sm:mb-8"
      ref={ref2}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section
        ref={ref}
        className="flex max-w-[50rem] items-center overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:h-[20rem] sm:pr-8"
      >
        <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 ">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <a href={link} target="_blank" className="mt-4 text-blue-500 underline">
            View Project
          </a>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag: string, index: number) => (
              <li
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="hidden object-contain sm:block sm:h-[20rem] sm:w-[25rem]"
            priority={true}
          />
        </div>
      </section>
    </motion.div>
  );
}
