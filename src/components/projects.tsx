"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll } from "framer-motion";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section
      className="group relative mb-3 h-[15rem] max-w-[42rem] overflow-hidden rounded-lg
    border bg-gray-100 shadow-lg transition last:mb-0 even:pl-8 hover:bg-gray-200 sm:mb-8 sm:h-[20rem] sm:pr-8
    "
    >
      <div
        className="flex h-full ml-0 flex-col px-5 pb-7 pt-4 group-even:ml-[18rem] sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10
      "
      >
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700 ">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
          {tags.map((tag: string, index: number) => (
            <li
              className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        quality={85}
        className="group-hover:-translate-x-3: absolute -right-40 top-8 w-[1rem] h-[1rem]
        rounded-t-lg shadow-2xl transition-transform group-even:-left-40 group-even:right-[initial]
        group-hover:translate-y-3 sm:-right-40 sm:top-0 sm:h-full sm:w-[20rem] sm:translate-x-0 sm:translate-y-0 sm:rounded-l-lg sm:rounded-r-lg sm:rounded-t-none
        "
      />
    </section>
  );
}
